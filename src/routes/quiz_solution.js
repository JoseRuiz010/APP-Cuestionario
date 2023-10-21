const express = require("express");

const router = express.Router();

const { response } = require("../controller/quizSolution");

router.post("/init", response);

module.exports = router;
