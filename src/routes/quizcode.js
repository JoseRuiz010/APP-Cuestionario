const express = require('express');
const { getAll, get, post, del, update, generarCode, getQuizByCode } = require('../controller/QuizCode');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', get);
router.post('/', post);
router.post('/code', getQuizByCode);
router.delete('/:id', del);
router.put('/:id', update);
// router.put('/code/:id', generarCode);



module.exports = router