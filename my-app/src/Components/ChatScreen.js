import React from 'react'
import Profile from '../Images/user.png'

class ChatScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      messages: [
        {
          message: 'salam',
          id: 1
        }, {
          message: 'salammm!',
          id: 2
        }, {
          message: 'khoobi?',
          id: 1
        }
      ]
    }
  }
  render () {
    console.log('props::', this.props)
    return (
      <div className='chat-screen'>
        {this.props.messages.map((item, index) => {
          if (item.id === 1) {
            return (
              <div key={index} className='sender'>
                <div className='text-container'>
                  <span className='text-sender'>
                    {item.message}
                  </span>
                  <div className='chat-space' />
                </div>
                <img className='chat-prof-pic' src={Profile} alt='' />
              </div>
            )
          } else {
            return (
              <div key={index} className='receiver'>
                <img className='chat-prof-pic' src={Profile} alt='' />
                <div className='text-container'>
                  <span className='text-receiver'>
                    {item.message}
                  </span>
                  <div className='chat-space' />
                </div>
              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default ChatScreen
