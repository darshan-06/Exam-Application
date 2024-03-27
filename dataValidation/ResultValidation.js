const mongoose = require('mongoose');

exports.resultValidation= (req, res, next) => {
    const { examId, studentId, answers } = req.body;

    if (!mongoose.Types.ObjectId.isValid(examId)) {
        return res.status(400).json({ error: 'Invalid exam ID' });
    }

    if (!Array.isArray(answers)) {
        return res.status(400).json({ error: 'Answers must be an array' });
    }

    for (let i = 0; i < answers.length; i++) {
        const { selectedOption, questionId } = answers[i];
        
        if (!mongoose.Types.ObjectId.isValid(questionId)) {
            return res.status(400).json({ error: `Answer ${i + 1}: Invalid question ID` });
        }

        if (selectedOption && (!Array.isArray(selectedOption) || selectedOption.length === 0)) {
            return res.status(400).json({ error: `Answer ${i + 1}: Selected option must be a non-empty array` });
        }
    }

    next();
};
