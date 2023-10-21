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
  time: Number,
  points: Number,
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
