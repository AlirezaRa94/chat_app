import { connect } from 'react-redux'
import Chat from '../Components/Chat'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const ChatContainer = connect(
  mapDispatchToProps
)(Chat)

export default ChatContainer
