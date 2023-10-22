const { body } = require("express-validator")


const modelValidationAuth = [
  body('username', 'userName doesnt exists').exists(),
  body('password', 'password doesnt exists').exists(),
]

const optionsValidation = {
  auth: "auth"
}

const customValidator = (op) => {
  switch (op) {
    case optionsValidation.auth: return modelValidationAuth
  }

}
module.exports = {
  customValidator,
  optionsValidation
}