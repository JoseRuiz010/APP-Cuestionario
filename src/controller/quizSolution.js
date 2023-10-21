const quizModel = require("../models/Quiz");
const questionModel = require("../models/Question");
const { Encode, ComparePass } = require("../utils/EncodeBcrypt");
const { decodeToken } = require("../utils/JWT_Token");

const response = async (req, res) => {
  const { answers, ...rest } = req.body;
  res.send({ answers, rest });
  // const token = req.header("Authorization");

  // const { id } = decodeToken(token);

  // const createdQuestions = await Promise.all(
  //   questions.map(async (questionData) => {
  //     const newQuestion = new questionModel(questionData);
  //     return await newQuestion.save();
  //   })
  // );

  // const newQuiz = new quizModel({
  //   ...rest,
  //   createdBy: id,
  //   questions: createdQuestions.map((question) => question._id), // Asocia las ID de las preguntas con el cuestionario
  // });
  // await newQuiz.save();

  // res.send({ newQuiz, createdQuestions });
};

module.exports = {
  response,
};
