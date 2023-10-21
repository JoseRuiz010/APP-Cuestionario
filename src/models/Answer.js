const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  answer: String,
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
});

const Question = mongoose.model("Answer", answerSchema);

module.exports = Question;
