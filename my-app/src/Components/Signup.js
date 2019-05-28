import React from 'react'
import logo from '../Images/icon.png'

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmpass: ''
    }
  }
  handleChange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }
  render () {
    return (
      <div className='signup-page'>
        <div className='container'>
          <img className='logo' src={logo} />
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
            {this.state.password !== this.state.confirmpass &&
              <p> Those passsword didn't match.Try again.</p>
            }
          </div>
          <button type='submit' className='btn'>
                  sign up
          </button>
          <p className='fg-pass'>
                   I am already member
          </p>
        </div>
      </div>
    )
  }
}

export default Signup
