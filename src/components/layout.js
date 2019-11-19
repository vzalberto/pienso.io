import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import { Helmet } from 'react-helmet';
import { Box, Clock, Grommet } from 'grommet'
import { Mail } from 'grommet-icons'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `'Exo', sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Grommet plain>
    
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap" rel="stylesheet" />

          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content="https://media3.giphy.com/media/l1J9AGXkysPtuWSVG/giphy.gif" />
          

        </Helmet>

        <Box direction="row-reverse">
          <Clock type="digital"/>
        </Box>

        <header>{header}</header>

        <main>{children}</main>

        <footer>
          <Box direction="column">
          <p>
          © {new Date().getFullYear()}, Hecho con &nbsp;<a href="https://www.gatsbyjs.org">Gatsby</a> 
          </p>
          <p>
          🐙 <a href="https://github.com/vzalberto">gh/vzalberto</a>
          </p>
          <p>
          ✍︎ <a href="mailto:vzalberto@msn.com">vzalberto@msn.com</a>
          </p>
          <p>
          ♞ <a href="https://lichess.org/ydDr6mtp" >lichess.org/paranoidhominid</a>
          </p>
          </Box>
        </footer>
      </div>
      </Grommet>
    )
  }
}

export default Layout
