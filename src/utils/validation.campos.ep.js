const validarCampos = (required_fields, body, res) => {

  if (!existence_required_fields(required_fields, body))
    return `Error data: los campos '${required_fields.join(', ')}' son requeridos`

  if (Object.keys(body).length > required_fields.length) {
    const camposTotales = Object.keys(body);
    const camposAdicionales = camposTotales.filter(c => !required_fields.includes(c))
    return `Información no válida. Los campos '${camposAdicionales.join(', ')}' no son requeridos.`
  }
  return null
}
const existence_required_fields = (required_fields, body) => {

  let isValid = true;
  if (required_fields.length > 0) {
    required_fields.forEach(c => {
      if (!body[c]) return isValid = false
    })
  }
  return isValid;
}

module.exports = {
  validarCampos
}