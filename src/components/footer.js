import React from "react"
import PropTypes from "prop-types"
import github from "../images/GitHub-Mark-120px-plus.png"

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div class="col-sm">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
          <div class="col-sm">
            <a title="github" href="https://github.com/jacobhmurphy">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer
