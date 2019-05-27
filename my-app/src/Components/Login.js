import React from 'react';
import logo from '../images/icon.svg';

class Login extends React.Component {
   constructor(props) {
      super(props)
      this.state= {
         username:'' ,
         password:''
      }
   }
   handleChange(e) {
      var name= e.target.name
      this.setState({[name]:e.target.value})
   }
   render() {
      return (
         <div className='login-page'>
            <div className='container'>
               <img className='logo' src={logo}/>
               <div className='input-container'>
                  <i className="fa fa-user">
                  </i>
                  <input 
                     name='username'
                     className='user-pass' 
                     placeholder='Username'
                     value={this.state.username}
                     onChange={(e)=> this.handleChange(e)}
                  />
               </div>
               <div className='input-container'>
                  <i className="fa fa-lock">
                  </i>
                  <input
                     type='password'
                     name='password'
                     className='user-pass'
                     placeholder='Password'
                     value={this.state.password}
                     onChange={(e)=> this.handleChange(e)}
                  />
               </div>
               <button type='submit' className='btn'>
                  GET STARTED
               </button>
               <p className='fg-pass'> 
                  Forgot Password? 
               </p>
               <p className='sign-up'>
                  create an account
               </p>
            </div>
         </div>
      );
   }
}

export default Login;