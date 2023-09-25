const quizModel = require("../models/Quiz");
const { Encode, ComparePass } = require("../utils/EncodeBcrypt");

const getAll = async (req, res) => {
  const quiz = await quizModel.find({})
  res.send(quiz)
}


const get = async (req, res) => {
  const id = req.params.id;
  const quiz = await quizModel.findById(id)
  res.send(quiz);
}


const post = async (req, res) => {
  const quiz = req.body

  const newQuiz = quizModel({
    ...quiz
  });
  await newQuiz.save();
  res.send(newQuiz)
}


const del = async (req, res) => {
  const id = req.params.id;
  const quiz = await quizModel.findByIdAndDelete(id)
  res.send(quiz)
}


const update = async (req, res) => {
  const id = req.params.id;
  const quiz = req.body
  const user = await quizModel.findByIdAndUpdate(id, {
    ...quiz
  })
  res.send(user)
}

const generarCode = async (id) => {
  const quizz = await quizModel.findById(id)

  return null
}

module.exports = {
  getAll, get, post, del, update, generarCode
}