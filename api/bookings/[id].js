import { changeBookingStatus, isAdmin, jsonResponse } from '../../lib/bookings-db.js'

export default {
  async fetch(request) {
    try {
      if (request.method !== 'PATCH') return jsonResponse({ error: 'Method not allowed' }, 405)
      if (!process.env.ADMIN_KEY) return jsonResponse({ error: 'ADMIN_KEY is not configured' }, 503)
      if (!isAdmin(request)) return jsonResponse({ error: 'Invalid admin key' }, 401)

      const id = decodeURIComponent(new URL(request.url).pathname.split('/').pop())
      const { status } = await request.json()
      const result = await changeBookingStatus(id, status)
      if (result.error) return jsonResponse({ error: result.error }, result.status)
      return jsonResponse(result)
    } catch (error) {
      console.error(error)
      const configurationError = error.message === 'DATABASE_URL is not configured'
      return jsonResponse({ error: configurationError ? 'Booking database is not configured' : 'Server error. Please try again.' }, configurationError ? 503 : 500)
    }
  },
}
