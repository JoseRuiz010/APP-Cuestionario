const mongoose = require("mongoose");

const quiz_solution = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
  },
  email: String,
  file_number: String,
  dni: String,
  answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Answer" }],
});

const Question = mongoose.model("Quiz_solutions", quiz_solution);

module.exports = Question;
