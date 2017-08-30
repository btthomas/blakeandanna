import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import pages from '../pageList.js'
import Burger from './burger.js'

import './index.css'

const Header = () =>
  <div
    id="top-bar"
    style={{
      marginBottom: '1rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 0.5rem',
      }}
    >
      <div style={{display: 'inline-block', width: '85%'}}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Blake <span id="heart">♥</span> Anna
          </Link>
        </h1>
        <h2 style={{ margin: 0 }}>
          February 3, 2018
        </h2>
      </div>
      <Burger>
        <Link to="/">home</Link>
        {pages.map(page => <Link key={page} to={`/${page}/`}>{page}</Link>)}
      </Burger>
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Blake and Anna Wedding - Feb 3, 2018"
      meta={[
        { name: 'description', content: 'Blake and Anna get married on February 3rd, 2018' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
