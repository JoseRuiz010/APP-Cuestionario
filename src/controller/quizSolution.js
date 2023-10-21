const answerModel = require('../models/Answer');
const quiz_solutionModel = require('../models/quiz_solution');

const response = async (req, res) => {
  const { answers, ...rest } = req.body;
  const createdAnswers = await Promise.all(
    answers.map(async (answerData) => {
      const newAnswer = new answerModel(answerData);
      return await newAnswer.save();
    })
  );

  const newQuizSolution = new quiz_solutionModel({
    ...rest,
    answers: createdAnswers.map((answer) => answer._id), // Asocia las ID de las preguntas con el cuestionario
  });
  await newQuizSolution.save();

  res.send({ newQuiz: newQuizSolution });
};


const getSolutionsByIdQuiz = async (req, res) => {
  const { params } = req

  const quiz_resolves = await quiz_solutionModel.find({ quiz: params.id }).populate({
    path: 'answers',
    populate: {
      path: 'question',
    },
  });
  res.send({ quiz_resolves })
}

module.exports = {
  response,
  getSolutionsByIdQuiz
};
