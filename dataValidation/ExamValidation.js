const mongoose = require('mongoose');

exports.examValidation = (req, res, next) => {
    const { classId, subject, timeDuration, questions } = req.body;

    if (!mongoose.Types.ObjectId.isValid(classId)) {
        return res.status(400).json({ error: 'Invalid class ID' });
    }

    if (typeof subject !== 'string' || subject.trim() === '') {
        return res.status(400).json({ error: 'Subject must be a non-empty string' });
    }


    if (typeof timeDuration !== 'number' || timeDuration <= 0) {
        return res.status(400).json({ error: 'Time duration must be a positive number' });
    }

    if (!Array.isArray(questions)) {
        return res.status(400).json({ error: 'Questions must be an array' });
    }

    for (let i = 0; i < questions.length; i++) {
        const { questionId, question, options, answer } = questions[i];
        
        if (typeof question !== 'string' || question.trim() === '') {
            return res.status(400).json({ error: `Question ${i + 1}: Question must be a non-empty string` });
        }

        if (typeof questionId !== 'number' || questionId <= 0) {
            return res.status(400).json({ error: 'questionId must be a positive number' });
        }

        if (!Array.isArray(options) || options.length < 2) {
            return res.status(400).json({ error: `Question ${i + 1}: Options must be an array with at least 2 items` });
        }
        if (!Array.isArray(answer) || answer.length === 0) {
            return res.status(400).json({ error: `Question ${i + 1}: Answer must be a non-empty array` });
        }
    }

    next();
};
