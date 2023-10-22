const { check_email_password } = require("./usersController")
const { decodeToken, generarToken } = require("../utils/JWT_Token")
const { customValidator } = require("../utils/validation.express-validator")
const { validationResult } = require("express-validator")

const login = async (req, res) => {
  const requiredField = ["username", "password"]
  const { username, password, ...rest } = req.body

  //express validaror
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array(), data: null });
  }

  try {
    const user = await check_email_password({ username, password })

    if (!user) return res.status(201).json({ error: "credenciales invalidas", data: null });

    const token = await
      generarToken({
        id: user._id
      })

    return res.send({ data: { token }, error: null })

  } catch (error) {
    return res.send("Error al generar el token").status(500)
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