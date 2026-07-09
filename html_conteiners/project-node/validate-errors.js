const validateUser = ({ name, age, email }) => {
  if (!name) throw new Error("name is required")
  if (!age) throw new Error("name is required")
  if (!email) throw new Error("name is required")
}

try {
  validateUser()
} catch (e) {
  console.log(err instanceof Error)
}
