import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Home2 from '../pages/Home2'
import Home3 from '../pages/Home3'

export default class Router extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={({history, location, match}) =>
            <App
              history={history}
              location={location}
              match={match}
            >
              <Switch>
                <Route exact path="/first" component={Home} />
                <Route exact path="/first/home" component={Home3} />
                <Route path="/first/ui/button" component={Home2} />
                <Route path="/second" component={Home2} />
                <Route path="/third" component={Home3} />
                <Redirect to="/first" />
              </Switch>
            </App>
          }/>
        </Switch>
      </HashRouter>
    )
  }
}