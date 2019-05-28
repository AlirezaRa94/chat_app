import React from 'react'
import ConversationList from './ConversationList'
import Chat from './Chat'

class Massenger extends React.Component {
  render () {
    return (
      <div className='massenger'>
        <ConversationList />
        <Chat />
      </div>
    )
  }
}

export default Massenger
