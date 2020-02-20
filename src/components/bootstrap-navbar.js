import React, { useState } from "react"
import { PropTypes } from "prop-types"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

const MyNavbar = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{siteTitle}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto mt-lg-0" navbar>
            <NavItem>
              <NavLink href="https://github.com/jacobhmurphy">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

MyNavbar.propTypes = {
  siteTitle: PropTypes.string,
}

MyNavbar.defaultProps = {
  siteTitle: ``,
}

export default MyNavbar
