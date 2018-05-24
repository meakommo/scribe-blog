import React from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

class NavBar extends React.Component {
  render () {
    return (
      <div className="row">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand"><span className="navbar-title">The Center of it All</span></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                About
              </NavItem>
              <NavItem eventKey={2} href="#">
                Profile
              </NavItem>
              <NavDropdown eventKey={3} title="Options" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>New Post</MenuItem>
                <MenuItem eventKey={3.2}>Place Holder</MenuItem>
                <MenuItem eventKey={3.3}>Place Holder</MenuItem>
              </NavDropdown>
            </Nav>
            {/* 
            TODO
            Create a function to switch this when user is logged in */}
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Login
              </NavItem>
              <NavItem eventKey={2} href="#">
                Sign up
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
