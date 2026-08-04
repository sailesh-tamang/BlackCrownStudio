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

## Deploying on Vercel

Vercel uses the serverless functions under `api/` and requires persistent Postgres storage:

1. Open the Vercel project and select **Storage**.
2. Open the Marketplace, add **Neon**, and connect it to this project. The integration supplies
   `DATABASE_URL` automatically.
3. In **Project Settings → Environment Variables**, add `ADMIN_KEY` with a long private value for
   Production and Preview.
4. Redeploy the project after connecting Neon and adding the environment variable.
5. Submit a booking at `/book`, then open `/dashboard` and enter the `ADMIN_KEY` value.

The bookings table is created automatically on the first API request. Vercel does not use the local
`data/bookings.json` file.
