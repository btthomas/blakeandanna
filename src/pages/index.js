import React from 'react'
import Link from 'gatsby-link'
import pages from '../pageList.js'

const getNum = () => {
  return Math.floor(Math.random() * 10) + 1;
}

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
    <img
      style={{width: '100%', height: 'auto', display: 'block', margin: '15px auto'}}
      src={`/pics/blake_anna_${getNum()}.jpg`}
    />
  </div>

export default IndexPage
