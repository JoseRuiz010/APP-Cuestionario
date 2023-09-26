const quizCodeModel = require("../models/CodeQuiz");
const { generarToken, decodeToken } = require("../utils/JWT_Token");

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
  const { quiz_id, exp } = req.body

  console.log('====================================');
  console.log({ quiz_id, exp });
  console.log('====================================');

  const code = generarToken({ quiz_id }, exp)
  const newQuiz = quizCodeModel({
    code, expired: exp, quiz: quiz_id
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

const getQuizByCode = async (req, res) => {
  const { code } = req.body
  console.log('====================================');
  console.log(code);
  console.log('====================================');
  try {
    const decode = decodeToken(code);
    res.send(decode)

  } catch (error) {
    res.send("Error de codigo")
  }

}

module.exports = {
  getAll, get, post, del, update, getQuizByCode
}