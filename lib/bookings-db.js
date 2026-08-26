import { neon } from '@neondatabase/serverless'
import { randomUUID } from 'node:crypto'

const allowedStatuses = ['New', 'Confirmed', 'Completed', 'Cancelled']

function getDatabase() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not configured')
  }
  return neon(process.env.DATABASE_URL)
}

export function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  })
}

export function validateBooking(input) {
  const required = ['name', 'email', 'phone', 'businessName', 'startDate', 'package']
  const missing = required.filter((field) => !String(input[field] || '').trim())
  if (missing.length) return `Missing required fields: ${missing.join(', ')}`
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) return 'Enter a valid email address'
  if (Number.isNaN(Date.parse(input.startDate))) return 'Enter a valid start date'
  return null
}

export function isAdmin(request) {
  return Boolean(process.env.ADMIN_KEY) && request.headers.get('authorization') === `Bearer ${process.env.ADMIN_KEY}`
}

async function ensureTable(sql) {
  await sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id UUID PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      business_name TEXT NOT NULL,
      start_date DATE NOT NULL,
      package TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'New',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ
    )
  `

  // Preserve existing consultation requests when upgrading from the previous schema.
  await sql`
    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'bookings' AND column_name = 'property_address'
      ) THEN
        ALTER TABLE bookings RENAME COLUMN property_address TO business_name;
      END IF;

      IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'bookings' AND column_name = 'shoot_date'
      ) THEN
        ALTER TABLE bookings RENAME COLUMN shoot_date TO start_date;
      END IF;
    END $$;
  `
}

function normalizeBooking(row) {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    businessName: row.business_name,
    startDate: String(row.start_date).slice(0, 10),
    package: row.package,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }
}

export async function createBooking(input) {
  const sql = getDatabase()
  await ensureTable(sql)
  const id = randomUUID()
  const rows = await sql`
    INSERT INTO bookings (id, name, email, phone, business_name, start_date, package)
    VALUES (
      ${id}, ${String(input.name).trim()}, ${String(input.email).trim().toLowerCase()},
      ${String(input.phone).trim()}, ${String(input.businessName).trim()},
      ${String(input.startDate)}, ${String(input.package).trim()}
    )
    RETURNING *
  `
  return normalizeBooking(rows[0])
}

export async function listBookings() {
  const sql = getDatabase()
  await ensureTable(sql)
  const rows = await sql`SELECT * FROM bookings ORDER BY created_at DESC`
  return rows.map(normalizeBooking)
}

export async function changeBookingStatus(id, status) {
  if (!allowedStatuses.includes(status)) return { error: 'Invalid status', status: 400 }
  const sql = getDatabase()
  await ensureTable(sql)
  const rows = await sql`
    UPDATE bookings
    SET status = ${status}, updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `
  if (!rows.length) return { error: 'Booking not found', status: 404 }
  return { booking: normalizeBooking(rows[0]) }
}
