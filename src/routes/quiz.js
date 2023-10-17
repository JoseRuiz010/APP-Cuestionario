const express = require('express');
const { getAll, get, post, del, update, generarCode } = require('../controller/quizController');
const verificarToken = require('../middleware/verificarToken');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', get);
router.post('/', verificarToken, post);
router.delete('/:id', del);
router.put('/:id', update);
router.put('/code/:id', generarCode);



module.exports = router