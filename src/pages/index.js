import React from 'react'
import Link from 'gatsby-link'
import pages from '../pageList.js'

const IndexPage = () =>
  <div>
    <h1>Hello Friends.</h1>
    <ul>
      {pages.map(page => {
        return (
          <li key={page}>
            <Link to={`/${page}/`}>{page}</Link>
          </li>
        );
      })}
    </ul>
    <img style={{width: '100%', height: 'auto', display: 'block', margin: '15px auto'}} src="https://unsplash.it/1200/1000" />
  </div>

export default IndexPage
