import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Massenger from './Components/Massenger'

function App () {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/massenger' component={Massenger} />
    </Router>
  )
}

export default App
