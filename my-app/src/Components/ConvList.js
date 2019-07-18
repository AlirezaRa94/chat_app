import React from 'react'
import Profile from '../Images/user.png'
import { addProfileName, addProfileStatus } from '../Actions/Chat'

class ConvList extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      online: false,
      ConversationList: [
        {
          name: 'Mohsen',
          latestMessage: 'Salammmmmm',
          numOfUnseen: '4',
          online: true
        },
        {
          name: 'Malihe',
          latestMessage: 'Salam Alireza',
          numOfUnseen: '2',
          online: false
        },
        {
          name: 'Maman',
          latestMessage: 'Salam',
          numOfUnseen: '3',
          online: false
        },
        {
          name: 'Fateme',
          latestMessage: 'Hi',
          numOfUnseen: '5',
          online: true
        }
      ]
    }
  }

  handleClick (name, online) {
    this.setState({ name }, () => {
      this.props.dispatch(addProfileName(this.state.name))
    })
    this.setState({ online }, () => {
      this.props.dispatch(addProfileStatus(this.state.online))
    })
  }

  handleOnline (online) {
    if (online === true) {
      return (
        <div className='online' />
      )
    } else {
      return (
        <div className='offline' />
      )
    }
  }

  render () {
    return (
      this.state.ConversationList.map((conv, index) => {
        return (
          <div
            className='conv'
            onClick={() => {
              this.handleClick(conv.name, conv.online)
            }}
            key={index}
          >
            <div className='left-conv'>
              <img className='prof-pic' src={Profile} alt='' />
              {this.handleOnline(conv.online)}
            </div>
            <div className='mid-conv'>
              <span className='name'>
                {conv.name}
              </span>
              <span className='message'>
                {conv.latestMessage}
              </span>
            </div>
            <div className='right-conv'>
              <span className='unseen'>
                {conv.numOfUnseen}
              </span>
            </div>
          </div>
        )
      })
    )
  }
}

export default ConvList
