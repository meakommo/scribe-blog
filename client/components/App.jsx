import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './NavBar'
import BackgroundImage from './BackgroundImage'
import ArticleList from './ArticleList'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={BackgroundImage} />
          <Switch>
            <div className="container">
              <Route exact path='/' component={ArticleList} />
            </div>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
