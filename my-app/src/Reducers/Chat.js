
const INIT = {
  newMessage: '',
  messages: [],
  name: '',
  online: false
}

function chat (state = INIT, action) {
  switch (action.type) {
    case 'SAVE_NEW_MESSAGE':
      return { ...state,
        newMessage: action.payload,
        messages: [...state.messages, { id: 1, message: action.payload }]
      }
    case 'SAVE_PROFILE_NAME':
      return { ...state,
        name: action.payload
      }
    case 'SAVE_PROFILE_STATUS':
      return { ...state,
        online: action.payload
      }
    default:
      return state
  }
}

export default chat
