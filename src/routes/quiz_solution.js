const express = require("express");

const router = express.Router();

const { response, getSolutionsByIdQuiz } = require("../controller/quizSolution");

router.post("/init", response);
router.get("/quiz/:id", getSolutionsByIdQuiz);

module.exports = router;
