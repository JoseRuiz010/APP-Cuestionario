const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referencia al usuario que creó el quiz
  },
  questions: [
    {
      text: String, // El enunciado de la pregunta
      options: [String], // Opciones de respuesta (si es una pregunta de opción múltiple)
      correctAnswer: String, // Respuesta correcta (si es una pregunta de opción múltiple)
    },
  ],
  // Otros campos personalizados según tus necesidades
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;