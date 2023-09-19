const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Asegura que cada username sea único
    trim: true, // Elimina espacios en blanco al principio y al final
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true, // Asegura que cada username sea único
    trim: true, // Elimina espacios en blanco al principio y al final
  },
  lastName: {
    type: String,
    required: true,
    unique: true, // Asegura que cada username sea único
    trim: true, // Elimina espacios en blanco al principio y al final
  },
  email: {
    type: String,
    required: true,
    unique: true, // Asegura que cada correo electrónico sea único
    trim: true,
    lowercase: true, // Almacena el correo electrónico en minúsculas
  },
  phone: String,
  profileImage: String,
  enabled: Boolean,
  legajo: String,
  dni: String
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel;