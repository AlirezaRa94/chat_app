import React from 'react'

class Conversation extends React.Component {
  render () {
    return (
      <div className='conv'>
        <div className='mid-conv'>
          <span>
            {this.props.name}
          </span>
          <span>
            {this.props.latestMessage}
          </span>
        </div>
        <div>
          <span>
            {this.props.numOfUnseen}
          </span>
        </div>
      </div>
    )
  }
}

export default Conversation
