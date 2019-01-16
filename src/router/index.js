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
          <Route path="/first" render={({history, location, match}) =>
            <App history={history} location={location} match={match}>
              <Switch>
                <Route path="/first/home" component={Home} />
                <Route path="/first/ui/button" component={Home2} />
                <Redirect to='/first/home' />
              </Switch>
            </App>
          }/>
          <Route path="/second" render={({history, location, match}) =>
            <App history={history} location={location} match={match}>
              <Switch>
                <Route path="/second/ui2/button" component={Home2} />
                <Redirect to='/second/ui2/button' />
              </Switch>
            </App>
          }/>
          <Route path="/third" render={({history, location, match}) =>
            <App history={history} location={location} match={match}>
              <Switch>
                <Route path="/third/ui3/button" component={Home3} />
                <Redirect to='/third/ui3/button' />
              </Switch>
            </App>
          }/>
        </Switch>
      </HashRouter>
    )
  }
}