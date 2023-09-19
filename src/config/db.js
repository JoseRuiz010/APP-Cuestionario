const mongoose = require('mongoose');

const dbConect = () => {
  const DB_URI = process.env.DB_URL_DEV
  console.log(DB_URI);
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Conexión a MongoDB Atlas establecida con éxito');
  })
    .catch((error) => {
      console.error('Error al conectar a MongoDB Atlas:', error);
    });
}

module.exports = dbConect