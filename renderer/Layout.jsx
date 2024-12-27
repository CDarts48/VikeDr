export { Layout }

import React from 'react'
import PropTypes from 'prop-types'
import { PageContextProvider } from './usePageContext'
import Header from '../pages/header/+Page' // Import the Header component
import './css/index.css'
import Footer from '../pages/footer/+Page'
import HeroSection from '../pages/hero/+Page'
// import './Layout.css'

Layout.propTypes = {
  pageContext: PropTypes.any,
  children: PropTypes.node
}

function Layout({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Header /> {/* Include the Header component */}
        {children}
        <HeroSection /> {/* Include the HeroSection component */}
        <Footer /> {/* Include the Footer component */}

      </PageContextProvider>
    </React.StrictMode>
  )
}