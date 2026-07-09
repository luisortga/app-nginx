const { retry } = require("rxjs")

const validateUser = ({ name, age, email }) => {
  if (!name) throw new Error("name is required")
  if (!age) throw new Error("name is required")
  if (!email) throw new Error("name is required")

  // call to data base

  throw new ConnectionError("database is not available")
}

class ConnectionError extends Error {}

class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = "ValidationError"
  }
}

const name = "luis"
const age = 28
const email = null

try {
  validateUser()
} catch (e) {
  if (e.name === "ConnectionError") {
    // retry after a few seconds
    // showUIModalValidation()
    setTimeout(() => {})
  }
}
