const { check_email_password } = require("./usersController")
const { decodeToken, generarToken } = require("../utils/JWT_Token")
const { validarCampos } = require("../utils/validation.campos.ep")

const login = async (req, res) => {
  const requiredField = ["username", "password"]
  const { username, password, ...rest } = req.body
  // if (!username || !password) res.send("Error")

  const resValidacion = validarCampos(requiredField, req.body, res);

  if (resValidacion) res.send({ message: resValidacion, data: null })

  try {
    const user = await check_email_password({ username, password })
    const token =
      generarToken({
        id: user._id
      })
    return res.send({ message: resValidacion, data: { token } })

  } catch (error) {
    return res.send(401)
  }
}

const getProfile = async (req, res) => {
  const { authorization } = req.headers

  if (!authorization) return res.send(401);

  try {
    const decode = decodeToken(authorization)
    res.send({ authorization, decode })
  } catch (error) {
    res.send({ error })
  }
}

module.exports = { login, getProfile }