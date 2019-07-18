import { connect } from 'react-redux'
import Chat from '../Components/Chat'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => ({
  name: state.name,
  online: state.online
})

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default ChatContainer
