import './server.js'
import { createServer as createViteServer } from 'vite'

const vite = await createViteServer()
await vite.listen()
vite.printUrls()
