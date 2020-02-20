import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const HomepageHero = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "IMG_2123.jpeg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className="container-fluid">
            <h1 className="display-3 text-light">Hi!</h1>
            <p className="lead text-light">
              My name is Jacob Murphy, and I'm a software developer based out of
              Orlando, Florida.
            </p>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledHomepageHero = styled(HomepageHero)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
`

export default StyledHomepageHero
