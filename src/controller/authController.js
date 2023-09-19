const { sign, verify } = require("jsonwebtoken")
const { check_email_password } = require("./usersController")

const login = async (req, res) => {
  const { username, password } = req.body
  const secretKey = process.env.SECRET_KEY
  const token_time = process.env.TOKEN_TIME
  if (!username || !password) res.send("Error")

  try {
    const user = await check_email_password({ username, password })
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    if (!user.username) {
      return res.send(401)
    }

    const token = sign({
      id: user._id
    }, secretKey, { expiresIn: token_time });

    return res.send({ token })

  } catch (error) {
    return res.send(401)
  }
}

const getProfile = async (req, res) => {
  const { authorization } = req.headers
  const secretKey = process.env.SECRET_KEY
  if (!authorization) return res.send(401)
  try {
    const decode = verify(authorization, secretKey)
    res.send({ authorization, decode })
  } catch (error) {
    res.send({ error })
  }
}

module.exports = { login, getProfile }