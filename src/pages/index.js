import React from "react"
import { Link } from "gatsby"

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            nesciunt quidem voluptate saepe, illum inventore est quos.
            Perspiciatis architecto, eaque iusto modi laboriosam quae
            aspernatur, molestiae distinctio impedit nihil reprehenderit.
          </p>
        </div>

        <div className="col-md">
          <h1>Blog</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            asperiores corporis nulla voluptatem, libero, repellat voluptates
            praesentium corrupti quidem dolores nemo sunt. Labore dolores neque
            perspiciatis vero deleniti totam tempore?
          </p>
        </div>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
