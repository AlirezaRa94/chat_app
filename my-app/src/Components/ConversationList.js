import React from 'react'
import icon from '../Images/icon.png'
import Conversation from './Conversation'

class ConversationList extends React.Component {
  constructor () {
    super()
    this.state = {
      ConversationList: [
        {
          name: 'Mohsen',
          latestMessage: 'Salammmmmm',
          numOfUnseen: '4'
        },
        {
          name: 'Malihe',
          latestMessage: 'Salam Alireza',
          numOfUnseen: '2'
        },
        {
          name: 'Maman',
          latestMessage: 'Salam',
          numOfUnseen: '3'
        },
        {
          name: 'Fateme',
          latestMessage: 'Hi',
          numOfUnseen: '5'
        }
      ]
    }
  }
  render () {
    return (
      <div className='convlist'>
        <div className='top-conv'>
          <img className='conv-logo' src={icon} alt='' />
          <i className='fas fa-plus-square' />
          <i className='fas fa-ellipsis-v' />
        </div>
        <div className='search-container'>
          <i className='fas fa-search' />
          <input
            className='search'
            placeholder='Search Here...'
          />
        </div>
        {this.state.ConversationList.map((conv, index) => {
          return (
            <Conversation
              key={index}
              name={conv.name}
              latestMessage={conv.latestMessage}
              numOfUnseen={conv.numOfUnseen}
            />
          )
        })}
      </div>
    )
  }
}

export default ConversationList
