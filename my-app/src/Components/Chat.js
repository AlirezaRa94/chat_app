import React from 'react'
import ChatScreenContainer from '../Containers/ChatScreenContainer'
import { addNewMessage } from '../Actions/Chat'

class Chat extends React.Component {
  constructor () {
    super()
    this.state = {
      newMessage: ''
    }
  }

  sendNewMessage () {
    this.props.dispatch(addNewMessage(this.state.newMessage))
    this.setState({ newMessage: '' })
  }

  handlePress (e) {
    if (e.keyCode === 13) {
      this.props.dispatch(addNewMessage(this.state.newMessage))
      this.setState({ newMessage: '' })
    }
  }

  handleOnline () {
    if (this.props.online === true) {
      return (
        <div className='online-chat' />
      )
    } else {
      return (
        <div className='offline-chat' />
      )
    }
  }

  render () {
    return (
      <div className='chat'>
        <div className='top-chat'>
          <div className='left-top-chat'>
            {this.handleOnline()}
            <p className='name-chat'>
              {this.props.name}
            </p>
          </div>
          <div className='call'>
            <div className='call-background'>
              <i className='fas fa-phone' />
            </div>
            <div className='call-background'>
              <i className='fas fa-video' />
            </div>
          </div>
        </div>
        <ChatScreenContainer />
        <div className='bottom-chat'>
          <input
            placeholder='Type your message here...'
            className='type-message'
            value={this.state.newMessage}
            onChange={(e) => this.setState({ newMessage: e.target.value })}
            onKeyDown={(e) => this.handlePress(e)}
          />
          <div className='options'>
            <div className='margin'>
              <i
                className='fas fa-laugh-wink'
              />
            </div>
            <div className='margin'>
              <i className='fas fa-paperclip' />
            </div>
            <div
              className='send'
              onClick={() => this.sendNewMessage()}
            >
              <i className='fas fa-location-arrow' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat
