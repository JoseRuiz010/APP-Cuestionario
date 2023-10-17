const quizModel = require("../models/Quiz");
const questionModel = require("../models/Question")
const { Encode, ComparePass } = require("../utils/EncodeBcrypt");

const getAll = async (req, res) => {
  const quiz = await quizModel.find({})
  res.send(quiz)
}


const get = async (req, res) => {
  const id = req.params.id;
  const quiz = await quizModel.findById(id).populate('questions')
  res.send(quiz);
}


const post = async (req, res) => {
  const { questions, ...rest } = req.body

  const createdQuestions = await Promise.all(questions.map(async (questionData) => {
    const newQuestion = new questionModel(questionData);
    return await newQuestion.save();
  }));

  const newQuiz = new quizModel({
    ...rest,
    questions: createdQuestions.map(question => question._id) // Asocia las ID de las preguntas con el cuestionario
  });
  await newQuiz.save();


  res.send({ newQuiz, createdQuestions })
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