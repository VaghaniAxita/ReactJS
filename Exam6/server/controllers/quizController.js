const Quiz = require('../models/Quiz');
const User = require('../models/User');

// User creates a quiz
const createQuiz = async (req, res) => {
    try {
        const { title, description, questions } = req.body;
        const userId = req.user.id; 

        const quiz = new Quiz({
            title,
            description,
            questions,
            createdBy: userId
        });

        await quiz.save();
        res.status(201).json({ message: 'Quiz created successfully', quiz });
    } catch (error) {
        res.status(500).json({ message: 'Error creating quiz', error });
    }
};

// Admin views all quizzes with user details
const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find().populate('createdBy', 'username email');
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching quizzes', error });
    }
};

module.exports = { createQuiz, getAllQuizzes };
