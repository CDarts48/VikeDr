export { onRenderHtml }

import ReactDOMServer from 'react-dom/server'
import { Layout } from '../renderer/Layout'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import logoUrl from './logo.png'
import { getPageTitle } from '../renderer/getPageTitle'

// Load environment variables
require('dotenv').config();

function onRenderHtml(pageContext) {
  const { Page } = pageContext

  // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
  // onRenderHtml() to support SPA
  if (!Page) throw new Error('My onRenderHtml() hook expects pageContext.Page to be defined')

  // Alternatively, we can use an HTML stream, see https://vike.dev/streaming
  const pageHtml = ReactDOMServer.renderToString(
    <Layout pageContext={pageContext}>
      <Page />
    </Layout>
  )

  const title = getPageTitle(pageContext)
  const desc = pageContext.data?.description || pageContext.config.description || "Topher's Maintenance and Repair";
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';
  
  // Create hero image HTML
  const heroImageHtml = `
    <div id="preloaded-hero" style="position: absolute; top: 0; width: 100%; overflow: hidden; z-index: -1; opacity: 0;">
      <div style="position: relative; max-width: 100%; margin: 0 auto;">
        <img
          src="/workpics/misc/rs=w_1280,h_853.avif"
          alt="Tools on a Table"
          width="1280"
          height="853"
          fetchpriority="high"
          decoding="async"
          style="width: 100%; height: auto; display: block;"
        />
      </div>
    </div>
  `;
  
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <link rel="preload" href="/workpics/misc/rs=w_1280,h_853.avif" as="image" fetchpriority="high">
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap"></script>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11312378702"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11312378702');
        </script>
        <!-- Event snippet for Tophers Clicks conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
        <script>
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-11312378702/IOYMCO-K4pEaEM7mlJIq',
                'event_callback': callback
            });
            return false;
          }
        </script>
      </head>
      <body>
        ${dangerouslySkipEscape(heroImageHtml)}
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add custom pageContext properties here, see https://vike.dev/pageContext#custom
    }
  }
}