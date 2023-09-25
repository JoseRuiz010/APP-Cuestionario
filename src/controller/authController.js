const { check_email_password } = require("./usersController")
const { decodeToken, generarToken } = require("../utils/JWT_Token")

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) res.send("Error")

  try {
    const user = await check_email_password({ username, password })

    if (!user.username) {
      return res.send(401)
    }

    const token =
      generarToken({
        id: user._id
      })
    return res.send({ token })

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