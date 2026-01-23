const express = require('express');
const router = express.Router();
const { fetchAndSaveTodo, getAllTodos } = require('../controllers/todo.controller');

router.get('/fetch', fetchAndSaveTodo);
router.get('/', getAllTodos);

module.exports = router;
