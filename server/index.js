import express from 'express'
import compression from 'compression'
import { renderPage } from 'vike/server'
import { root } from './root.js'
import path from 'path'
import { fileURLToPath } from 'url'

const isProduction = process.env.NODE_ENV === 'production'

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

startServer()

async function startServer() {
  const app = express()

  // Enable compression middleware
  app.use(compression())

  // Serve static files
  app.use(express.static(path.join(__dirname, 'public')))

  // Serve robots.txt as plain text
  app.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(root, 'robots.txt'))
  })

  // Vite integration
  if (isProduction) {
    // In production, we need to serve our static assets ourselves.
    // (In dev, Vite's middleware serves our static assets.)
    const sirv = (await import('sirv')).default
    app.use(sirv(`${root}/dist/client`))

    // Manually import the server production entry
    try {
      await import(`${root}/dist/server/+onRenderHtml.js`)
    } catch (error) {
      console.error('Failed to import server production entry:', error)
    }
  } else {
    // Commenting out the development server functions
    /*
    // We instantiate Vite's development server and integrate its middleware to our server.
    // ⚠️ We instantiate it only in development. (It isn't needed in production and it
    // would unnecessarily bloat our production server.)
    const vite = await import('vite');
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true }
      })
    ).middlewares;
    app.use(viteDevMiddleware);
    */
  }

  // Other middlewares (e.g. some RPC middleware such as Telefunc)
  // ...

  // Vike middleware. It should always be our last middleware (because it's a
  // catch-all middleware superseding any middleware placed after it).
  app.get('*', async (req, res) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
      headersOriginal: req.headers
    }
    const pageContext = await renderPage(pageContextInit)
    if (pageContext.errorWhileRendering) {
      // Install error tracking here, see https://vike.dev/error-tracking
    }
    const { httpResponse } = pageContext
    if (res.writeEarlyHints) res.writeEarlyHints({ link: httpResponse.earlyHints.map((e) => e.earlyHintLink) })
    httpResponse.headers.forEach(([name, value]) => res.setHeader(name, value))
    res.status(httpResponse.statusCode)
    // For HTTP streams use pageContext.httpResponse.pipe() instead, see https://vike.dev/streaming
    res.send(httpResponse.body)
  })

  const port = process.env.PORT || 3000
  app.listen(port, '0.0.0.0')
  console.log(`Server running at http://localhost:${port}`)
}