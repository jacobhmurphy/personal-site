import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHomepageHero from "../components/backgroundsection"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <StyledHomepageHero></StyledHomepageHero>
    <div className="container-fluid">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </div>
  </Layout>
)

export default SecondPage
