import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './NavBar'

class App extends React.Component {
  render () {
    return (
      <Router>
        <NavBar />
      </Router>
    )
  }
}

export default App
