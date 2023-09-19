const express = require('express');
const { get, getAll, update, del, post, check_email_password } = require('../controller/usersController');

const router = express.Router()

router.get('/', getAll);
router.get('/:id', get);
router.post('/', post);
router.delete('/:id', del);
router.put('/:id', update);



module.exports = router
