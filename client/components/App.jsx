import React from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './NavBar'
import BackgroundImage from './BackgroundImage'
import ArticleList from './ArticleList'

class App extends React.Component {
  render () {
    return (
      <div>
        {/* <Router> */}
        <NavBar />
        <BackgroundImage />
        <ArticleList />
        {/* </Router> */}
      </div>
    )
  }
}

export default App
