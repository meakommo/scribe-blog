import React from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './NavBar'
import BackgroundImage from './BackgroundImage'
import Landing from './Landing'

class App extends React.Component {
  render () {
    return (
      <div>
        {/* <Router> */}
        <NavBar />
        <BackgroundImage />
        <Landing />
        {/* </Router> */}
      </div>
    )
  }
}

export default App
