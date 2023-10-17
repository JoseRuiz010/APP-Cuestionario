const { sign, verify } = require("jsonwebtoken");

const generarToken = (info, exp) => {
  const token_time = process.env.TOKEN_TIME
  const secretKey = process.env.SECRET_KEY
  console.log('====================================');
  console.log({ ...info, token_time, exp: new String(exp).toString() });
  console.log('====================================');
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

const decodeToken = (authorization) => {
  const secretKey = process.env.SECRET_KEY
  const decode = verify(authorization, secretKey)
  return decode;
}

module.exports = {
  generarToken,
  decodeToken
}