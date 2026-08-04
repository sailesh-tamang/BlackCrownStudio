# BlackCrown Studio

## Local development

Set an admin key and start both the website and booking API:

```powershell
$env:ADMIN_KEY="choose-a-private-key"
npm run dev
```

Open the booking page at `http://localhost:5173/book` and the bookings dashboard at
`http://localhost:5173/dashboard`. Enter the same `ADMIN_KEY` when the dashboard asks for it.

## Production

Build and run the combined static site and API server:

```powershell
npm run build
$env:ADMIN_KEY="choose-a-long-private-key"
$env:PORT="3001"
npm start
```

Bookings are persisted in `data/bookings.json`. Back up this file and mount the `data` directory
on persistent storage when deploying. Do not leave `ADMIN_KEY` unset in production.
