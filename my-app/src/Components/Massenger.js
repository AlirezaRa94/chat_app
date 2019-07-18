import React from 'react'
import LeftBar from './LeftBar'
import ChatContainer from '../Containers/ChatContainer'

class Massenger extends React.Component {
  render () {
    return (
      <div className='massenger'>
        <LeftBar />
        <ChatContainer />
      </div>
    )
  }
}

export default Massenger
