import React from 'react'

class NavBar extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              <img src="images/LoC-logo.png" alt="Loco"/>
            </a>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active">
                          Home
              </a>
              <a className="navbar-item">
                          Portfolio
              </a>
              <a className="navbar-item">
                          Archives
              </a>
              <a className="navbar-item">
                          About
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                              Account
                </a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">
                                  Dashboard
                  </a>
                  <a className="navbar-item">
                                  Profile
                  </a>
                  <a className="navbar-item">
                                  Settings
                  </a>
                  <hr className="navbar-divider"/>
                  <div className="navbar-item">
                              Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
