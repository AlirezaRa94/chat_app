import React from 'react'
import logo from '../Images/icon.png'
import validate from '../Validation/ValidateFunction'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: {
        username: null,
        password: null
      }
    }
  }
  handleChange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }
  handleClick () {
    var usernameError = validate('username', this.state.username)
    var passwordError = validate('password', this.state.password)
    var error = {}
    error.username = usernameError
    error.password = passwordError
    this.setState({ error })
    axios.post('https://reqres.in/api/register', {
      email: this.state.username,
      password: this.state.password
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error.response)
      })
  }
  render () {
    return (
      <div className='login-page'>
        <div className='container'>
          <img className='logo' src={logo} alt='' />
          <div className='input-container'>
            <i className='fa fa-user' />
            <input
              name='username'
              className='user-pass'
              placeholder='Username'
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          {this.state.error.username !== null &&
            <p className='error' >
              {this.state.error.username}
            </p>
          }
          <div className='input-container'>
            <i className='fa fa-lock' />
            <input
              type='password'
              name='password'
              className='user-pass'
              placeholder='Password'
              value={this.state.password}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          {this.state.error.password !== null &&
            <p className='error'>
              {this.state.error.password}
            </p>
          }
          <button
            type='submit'
            className='btn'
            onClick={() => this.handleClick()}
          >
            GET STARTED
          </button>
          <p className='link'>
            Forgot Password?
          </p>
          <Link className='sign-up' to='./signup'>
            create an account
          </Link>
        </div>
      </div>
    )
  }
}

export default Login
