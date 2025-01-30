import express from 'express'
import compression from 'compression'
import { renderPage } from 'vike/server'
import { root } from './root.js'

startServer()

async function startServer() {
  const app = express()

  app.use(compression())

  // Serve static assets
  const sirv = (await import('sirv')).default
  app.use(sirv(`${root}/dist/client`, { dev: true }))

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
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}