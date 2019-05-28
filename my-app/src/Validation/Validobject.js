var ValidObject= {
  username: {
    presence: {
      message: '^Please enter your username.'
    },
    length: {
      minimum: 4,
      message: '^Your username must be at least 3 characters.'
    }
  },
  email: {
    presence: {
      message: '^Please enter your email.'
    },
    email: {
      message: '^Please enter a valid email.'
    }
  },
  password: {
    presence: {
      message: '^Please enter your password.'
    },
    length: {
      minimum: 4,
      message: '^Your password must be at least 5 characters.'
    }
  }
}
