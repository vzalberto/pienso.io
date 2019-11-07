/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import Image from "gatsby-image"

import {Clock} from 'grommet'
import { rhythm } from "../utils/typography"

const Glitch = () => {

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        <textarea placeholder="¿en qué piensas tú?"></textarea>
      </p>
    </div>
  )
}

export default Glitch
