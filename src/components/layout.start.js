import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Footer from "./footer";
// import heroLogo from "../assets/img/govilnius-logo.svg";
// import Header from './header'
import '../scss/style.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          < link href = "https://fonts.googleapis.com/css?family=Staatliches|Secular+One|Fira+Sans:400,500,700&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese,hebrew,latin"
          rel = "stylesheet" / >
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div>
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
