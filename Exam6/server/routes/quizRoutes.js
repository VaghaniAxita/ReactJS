const express = require('express');
const { createQuiz, getAllQuizzes } = require('../controllers/quizController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create', authMiddleware, createQuiz);
router.get('/all', authMiddleware, getAllQuizzes);

module.exports = router;