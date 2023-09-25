const quizCodeModel = require("../models/CodeQuiz");
const { Encode, ComparePass } = require("../utils/EncodeBcrypt");

const getAll = async (req, res) => {
  const quiz = await quizCodeModel.find({})
  res.send(quiz)
}


const get = async (req, res) => {
  const id = req.params.id;
  const quiz = await quizCodeModel.findById(id)
  res.send(quiz);
}


const post = async (req, res) => {
  const quiz = req.body

  const newQuiz = quizCodeModel({
    ...quiz
  });
  await newQuiz.save();
  res.send(newQuiz)
}


const del = async (req, res) => {
  const id = req.params.id;
  const quiz = await quizCodeModel.findByIdAndDelete(id)
  res.send(quiz)
}


const update = async (req, res) => {
  const id = req.params.id;
  const quiz = req.body
  const user = await quizCodeModel.findByIdAndUpdate(id, {
    ...quiz
  })
  res.send(user)
}

const generarCode = async (id) => {
  const quizz = await quizCodeModel.findById(id)

  return null
}

module.exports = {
  getAll, get, post, del, update, generarCode
}