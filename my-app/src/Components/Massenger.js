import React from 'react'
import ConversationList from './ConversationList'
import ChatContainer from '../Containers/ChatContainer'

class Massenger extends React.Component {
  render () {
    return (
      <div className='massenger'>
        <ConversationList />
        <ChatContainer />
      </div>
    )
  }
}

export default Massenger
