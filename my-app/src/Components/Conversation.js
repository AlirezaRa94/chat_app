import React from 'react'
import Profile from '../Images/user.png'

class Conversation extends React.Component {
  render () {
    return (
      <div className='conv'>
        <div className='left-conv'>
          <img className='prof-pic' src={Profile} alt='' />
          <div className='online' />
        </div>
        <div className='mid-conv'>
          <span className='name'>
            {this.props.name}
          </span>
          <span className='message'>
            {this.props.latestMessage}
          </span>
        </div>
        <div className='right-conv'>
          <span className='unseen'>
            {this.props.numOfUnseen}
          </span>
        </div>
      </div>
    )
  }
}

export default Conversation
