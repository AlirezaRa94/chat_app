import React from 'react'
import Conversation from './Conversation'

class ConversationList extends React.Component {
  render () {
    return (
      <div className='convlist'>
        <Conversation
          name='Mohsen'
          latestMessage='Salammmmmm'
          numOfUnseen='4'
        />
        <Conversation
          name='Malihe'
          latestMessage='Salam Alireza'
          numOfUnseen='2'
        />
        <Conversation
          name='Maman'
          latestMessage='Salam'
          numOfUnseen='3'
        />
      </div>
    )
  }
}

export default ConversationList
