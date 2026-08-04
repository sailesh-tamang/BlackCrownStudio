import { createBooking, isAdmin, jsonResponse, listBookings, validateBooking } from '../lib/bookings-db.js'

export default {
  async fetch(request) {
    try {
      if (request.method === 'POST') {
        const input = await request.json()
        const validationError = validateBooking(input)
        if (validationError) return jsonResponse({ error: validationError }, 400)
        return jsonResponse({ booking: await createBooking(input) }, 201)
      }

      if (request.method === 'GET') {
        if (!process.env.ADMIN_KEY) return jsonResponse({ error: 'ADMIN_KEY is not configured' }, 503)
        if (!isAdmin(request)) return jsonResponse({ error: 'Invalid admin key' }, 401)
        return jsonResponse({ bookings: await listBookings() })
      }

      return jsonResponse({ error: 'Method not allowed' }, 405)
    } catch (error) {
      console.error(error)
      const configurationError = error.message === 'DATABASE_URL is not configured'
      return jsonResponse({ error: configurationError ? 'Booking database is not configured' : 'Server error. Please try again.' }, configurationError ? 503 : 500)
    }
  },
}
