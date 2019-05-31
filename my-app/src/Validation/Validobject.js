var ValidObject = {
  username: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your username.'
    },
    length: {
      minimum: 3,
      message: '^Your username must be at least 3 characters.'
    }
  },
  email: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your email.'
    },
    email: {
      message: '^Please enter a valid email.'
    }
  },
  password: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your password.'
    },
    length: {
      minimum: 6,
      message: '^Your password must be at least 6 characters.'
    }
  }
}

export default ValidObject
