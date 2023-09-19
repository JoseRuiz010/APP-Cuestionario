const bcrypt = require('bcrypt');

const Encode = async (pass) => {
  const h = await bcrypt.hash(pass, 10)
  console.log("Contrseña encriptada --->", h);
  return h;
}
const ComparePass = async (enteredPassword, hashedPasswordFromDatabase) => {
  return await bcrypt.compare(enteredPassword, hashedPasswordFromDatabase);
}
module.exports = {
  ComparePass, Encode
}