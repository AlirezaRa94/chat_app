
export const addNewMessage = (newMessage) => ({
  type: 'SAVE_NEW_MESSAGE',
  payload: newMessage
})

export const addProfileName = (name) => ({
  type: 'SAVE_PROFILE_NAME',
  payload: name
})

export const addProfileStatus = (online) => ({
  type: 'SAVE_PROFILE_STATUS',
  payload: online
})
