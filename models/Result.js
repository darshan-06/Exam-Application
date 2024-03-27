const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    answers: [{
        _id: false, 
        questionId: {
            type: Number,
            required: true
        },
        selectedOption: [{
            type: String,
            required: true
        }]
    }],
    totalScore: {
        type: Number,
        required: true
    }
},{ versionKey: false });

module.exports = mongoose.model('Result', resultSchema);