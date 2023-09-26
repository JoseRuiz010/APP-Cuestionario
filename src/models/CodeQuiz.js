const mongoose = require('mongoose');

const codeQuizSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  expired: Date,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
  },
});

const QuizCode = mongoose.model('QuizCode', codeQuizSchema);

module.exports = QuizCode;