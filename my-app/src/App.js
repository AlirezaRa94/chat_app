import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Massenger from './Components/Massenger'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/massenger' component={Massenger} />
      </Switch>
    </Router>
  )
}

export default App
