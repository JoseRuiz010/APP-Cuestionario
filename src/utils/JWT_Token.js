const { sign, verify } = require("jsonwebtoken");

const generarToken = async (info, exp) => {
  const token_time = process.env.TOKEN_TIME
  const secretKey = process.env.SECRET_KEY

  const token = sign(
    info,
    secretKey,
    { expiresIn: exp ? new String(exp).toString() : token_time }
  );
  console.log('====================================');
  console.log({ token });
  console.log('====================================');

  return token;
}
const validarToken = (token) => {
  const secretKey = process.env.SECRET_KEY
  try {
    const verificacionToken = verify(token, secretKey);
    console.log({ verificacionToken });
    return validarToken
  } catch (error) {
    console.log('error: ' + error);
    return null
  }
}

const decodeToken = (authorization) => {
  const secretKey = process.env.SECRET_KEY
  const decode = verify(authorization, secretKey)
  return decode;
}

module.exports = {
  generarToken,
  decodeToken,
  validarToken
}