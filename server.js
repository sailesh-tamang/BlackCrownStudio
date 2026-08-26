import { createServer } from 'node:http'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'
import { randomUUID } from 'node:crypto'
import process from 'node:process'

const root = fileURLToPath(new URL('.', import.meta.url))
const dataDir = join(root, 'data')
const dataFile = process.env.DATA_FILE || join(dataDir, 'bookings.json')
const distDir = join(root, 'dist')
const port = Number(process.env.PORT || 3001)
const adminKey = process.env.ADMIN_KEY || ''

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

async function readBookings() {
  try {
    return JSON.parse(await readFile(dataFile, 'utf8'))
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
    await mkdir(dataDir, { recursive: true })
    await writeFile(dataFile, '[]\n')
    return []
  }
}

async function saveBookings(bookings) {
  await mkdir(dataDir, { recursive: true })
  await writeFile(dataFile, `${JSON.stringify(bookings, null, 2)}\n`)
}

function json(response, status, body) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' })
  response.end(JSON.stringify(body))
}

function isAdmin(request) {
  if (!adminKey) return true
  return request.headers.authorization === `Bearer ${adminKey}`
}

async function parseBody(request) {
  let body = ''
  for await (const chunk of request) {
    body += chunk
    if (body.length > 100_000) throw new Error('Request is too large')
  }
  return JSON.parse(body || '{}')
}

function validateBooking(input) {
  const required = ['name', 'email', 'phone', 'businessName', 'startDate', 'package']
  const missing = required.filter((field) => !String(input[field] || '').trim())
  if (missing.length) return `Missing required fields: ${missing.join(', ')}`
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) return 'Enter a valid email address'
  if (Number.isNaN(Date.parse(input.startDate))) return 'Enter a valid start date'
  return null
}

async function handleApi(request, response, pathname) {
  if (pathname === '/api/bookings' && request.method === 'POST') {
    const input = await parseBody(request)
    const validationError = validateBooking(input)
    if (validationError) return json(response, 400, { error: validationError })

    const bookings = await readBookings()
    const booking = {
      id: randomUUID(),
      name: String(input.name).trim(),
      email: String(input.email).trim().toLowerCase(),
      phone: String(input.phone).trim(),
      businessName: String(input.businessName).trim(),
      startDate: String(input.startDate),
      package: String(input.package).trim(),
      status: 'New',
      createdAt: new Date().toISOString(),
    }
    bookings.unshift(booking)
    await saveBookings(bookings)
    return json(response, 201, { booking })
  }

  if (pathname === '/api/bookings' && request.method === 'GET') {
    if (!isAdmin(request)) return json(response, 401, { error: 'Invalid admin key' })
    return json(response, 200, { bookings: await readBookings() })
  }

  const bookingMatch = pathname.match(/^\/api\/bookings\/([^/]+)$/)
  if (bookingMatch && request.method === 'PATCH') {
    if (!isAdmin(request)) return json(response, 401, { error: 'Invalid admin key' })
    const input = await parseBody(request)
    const allowedStatuses = ['New', 'Confirmed', 'Completed', 'Cancelled']
    if (!allowedStatuses.includes(input.status)) return json(response, 400, { error: 'Invalid status' })

    const bookings = await readBookings()
    const booking = bookings.find((entry) => entry.id === bookingMatch[1])
    if (!booking) return json(response, 404, { error: 'Booking not found' })
    booking.status = input.status
    booking.updatedAt = new Date().toISOString()
    await saveBookings(bookings)
    return json(response, 200, { booking })
  }

  return json(response, 404, { error: 'Not found' })
}

async function serveApp(request, response, pathname) {
  const requested = pathname === '/' ? '/index.html' : pathname
  const relative = normalize(requested).replace(/^([/\\])+/, '')
  const filePath = join(distDir, relative)
  try {
    const body = await readFile(filePath)
    response.writeHead(200, { 'Content-Type': contentTypes[extname(filePath)] || 'application/octet-stream' })
    response.end(body)
  } catch {
    const body = await readFile(join(distDir, 'index.html'))
    response.writeHead(200, { 'Content-Type': contentTypes['.html'] })
    response.end(body)
  }
}

const server = createServer(async (request, response) => {
  const { pathname } = new URL(request.url, `http://${request.headers.host}`)
  try {
    if (pathname.startsWith('/api/')) await handleApi(request, response, pathname)
    else await serveApp(request, response, pathname)
  } catch (error) {
    console.error(error)
    json(response, 500, { error: 'Server error. Please try again.' })
  }
})

server.listen(port, () => {
  console.log(`BlackCrown server running at http://localhost:${port}`)
  if (!adminKey) console.warn('ADMIN_KEY is not set; dashboard access is currently unrestricted.')
})
