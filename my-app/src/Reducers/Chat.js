
const INIT = {
  newMessage: '',
  messages: []
}

function chat (state = INIT, action) {
  switch (action.type) {
    case 'SAVE_NEW_MESSAGE':
      return { ...state,
        newMessage: action.payload,
        messages: [...state.messages, { id: 1, message: action.payload }]
      }
    default:
      return state
  }
}

export default chat