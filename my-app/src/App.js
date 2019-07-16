import React from 'react'
import './App.css'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Signup from './Components/Signup'
// import Login from './Components/Login'
import Massenger from './Components/Massenger'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Chat from './Reducers/Chat'

const store = createStore(Chat)

function App () {
  return (
    <Provider store={store}>
      <Massenger />
    </Provider>
    // <Router>
    //   <Route exact path='/' component={Login} />
    //   <Route path='/signup' component={Signup} />
    //   <Route path='/massenger' component={Massenger} />
    // </Router>
  )
}

export default App
