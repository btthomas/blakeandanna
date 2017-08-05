import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
  <div>
    <h1>Hello Friends.</h1>
    <ul>
      <li>
        <Link to="/venue/">venue</Link>
      </li>
      <li>
        <Link to="/hotel/">accomodations</Link>
      </li>
      <li>
        <Link to="/schedule/">schedule</Link>
      </li>
      <li>
        <Link to="/people/">people</Link>
      </li>
      <li>
        <Link to="/registry/">registry</Link>
      </li>
      <li>
        <Link to="/photos/">photos</Link>
      </li>
    </ul>
    <img style={{width: '100%', height: 'auto', display: 'block', margin: '15px auto'}} src="https://unsplash.it/1200/1000" />
  </div>

export default IndexPage
