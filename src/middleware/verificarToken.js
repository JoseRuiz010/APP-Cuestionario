const { validarToken } = require("../utils/JWT_Token");


const verificarToken = (req, res, next) => {
  const token = req.header('Authorization');
  console.log({ token });
  if (!token) {
    return res.status(401).json({ mensaje: 'No se proporcionó un token.' });
  }

  try {
    const verificacionToken = validarToken(token);

    if (verificacionToken) {
      next();
    }

  } catch (error) {
    res.send("Token invalido")
  }
}

module.exports = verificarToken