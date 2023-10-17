const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
 
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
  },
  options: [String],
  correctAnswer: String,
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
