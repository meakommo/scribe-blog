import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './NavBar'
import AllPosts from './AllPosts'

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <AllPosts />
      </div>
    )
  }
}

export default App
