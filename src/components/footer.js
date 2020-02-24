import React from "react"
import github from "../images/GitHub-Mark-32px copy.png"

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="row container-fluid">
          <div className="col">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
          <div className="col">
            <a
              title="github"
              href="https://github.com/jacobhmurphy"
              className="float-right"
            >
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
