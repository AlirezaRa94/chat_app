import { connect } from 'react-redux'
import ConvList from '../Components/ConvList'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const ConvListContainer = connect(
  mapDispatchToProps
)(ConvList)

export default ConvListContainer
