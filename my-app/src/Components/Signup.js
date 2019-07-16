import React from 'react'
import logo from '../Images/icon.png'
import validate from '../Validation/ValidateFunction'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmpass: '',
      error: {
        username: null,
        email: null,
        password: null,
        confirmpass: null
      }
    }
  }
  handleChange (e) {
    console.log('value', e.target.value)
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }
  handleClick () {
    var usernameError = validate('username', this.state.username)
    var emailError = validate('email', this.state.email)
    var passwordError = validate('password', this.state.password)
    if (this.state.confirmpass !== this.state.password) {
      var confirmpassError = 'Password and confirm password does not match.'
    } else {
      confirmpassError = null
    }
    var error = {}
    error.username = usernameError
    error.email = emailError
    error.password = passwordError
    error.confirmpass = confirmpassError
    this.setState({ error })
  }
  render () {
    return (
      <div className='signup-page'>
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
            <i className='fa fa-envelope' />
            <input
              name='email'
              className='user-pass'
              placeholder='Email'
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          {this.state.error.email !== null &&
            <p className='error' >
              {this.state.error.email}
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
            <p className='error' >
              {this.state.error.password}
            </p>
          }
          <div className='input-container'>
            <i className='fa fa-lock' />
            <input
              type='password'
              name='confirmpass'
              className='user-pass'
              placeholder='Confirm Password'
              value={this.state.confirmpass}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          {this.state.error.confirmpass !== null &&
            <p className='error' >
              {this.state.error.confirmpass}
            </p>
          }
          <button
            type='submit'
            className='btn'
            onClick={() => this.handleClick()}
          >
            sign up
          </button>
          <Link className='link' to='./'>
            I am already member
          </Link>
        </div>
      </div>
    )
  }
}

export default Signup
