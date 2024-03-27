const mongoose = require('mongoose');


const questionSchema = new mongoose.Schema({
    questionId: {
        type: Number
    },
    question: {
        type: String,
        required: true
    },
    options: [{
        type: String,
        required: true
    }],
    answer: [{
        type: String,
        required: true
    }]
}, { _id: false });


const examSchema = new mongoose.Schema({
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    timeDuration: {
        type: Number,
        required: true
    },
    questions: [questionSchema],
}, 
{ versionKey: false });


module.exports = mongoose.model('Exam', examSchema);
