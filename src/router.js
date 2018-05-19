import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from "./App.js"
import Landing from "./components/landing"
class Router extends Component {


  render() {
    return (<BrowserRouter>
      <Switch>
        <Route path="/" exact="exact" component={Landing}/>
        <Route path="/home" exact="exact" component={App}/>
        <Route component={Landing} />
      </Switch>
    </BrowserRouter>);
  }

}

export default Router
