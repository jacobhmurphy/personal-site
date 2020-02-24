import React from "react"

import Layout from "../components/layout"
import StyledHomepageHero from "../components/backgroundsection"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledHomepageHero></StyledHomepageHero>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md">
          <h1>About</h1>
          <p>
            My name is Jacob Murphy, and I'm a software developer, specializing
            in web development. My GitHub profile can be found in the navbar.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
