import React from 'react'
import icon from '../Images/icon.png'
import ConvListContainer from '../Containers/ConvListContainer'

class LeftBar extends React.Component {
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
        <ConvListContainer />
      </div>
    )
  }
}

export default LeftBar
