import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class BlogPostTemplate extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <h1>{frontmatter.title}</h1>
          <h3>{frontmatter.date}</h3>
        </div>
        <div className="container-fluid">
          <article dangerouslySetInnerHTML={{ __html: html }}></article>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
