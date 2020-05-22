import React, { Component } from 'react'
import{
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'
import AllPosts from './components/AllPosts.js'
import AllComments from './components/AllComments.js'
import NavBar from './components/NavBar.js'
import About from './components/About.js'
import Login from './components/Login.js'
export default class App extends Component {
  state = {
    userName: 'guest',
  }

  getAllPosts = () => {
    return (<AllPosts userName={this.state.userName} />)
  }

  

  render() {
    return (
      <div>
        App Page
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/posts" component={this.getAllPosts}/>
            <Route exact path="/posts/:postId"></Route>
            <Route exact path="/comments" component={AllPosts}/>
            <Route exact path="/comments/:commentId"></Route>
            <Route exact path="/about" component={About}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
