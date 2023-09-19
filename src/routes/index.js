const express = require('express');
const fs = require('fs');

const router = express.Router();

const path = `${__dirname}`

console.log(path)

const deleteExtension = (file) => file.split('.').shift()

fs.readdirSync(path).map(file => {
  const routesExcluidas = ['index']
  const fileWithOutExtension = deleteExtension(file)
  if (!routesExcluidas.includes(fileWithOutExtension)) {
    console.log("----->" + fileWithOutExtension);
    router.use(`/${fileWithOutExtension}`, require(`./${fileWithOutExtension}`));
  }
})


module.exports = router

