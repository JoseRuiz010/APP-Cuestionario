const express = require('express');
const { getAll, get, post, del, update } = require('../controller/quizController');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', get);
router.post('/', post);
router.delete('/:id', del);
router.put('/:id', update);



module.exports = router