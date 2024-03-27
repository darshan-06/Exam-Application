const Exam = require('../models/Exam');


exports.createExam = async function (req, res) {
    try {
        const exam = new Exam(req.body);
        await exam.save();
        res.status(201).json({ id: exam._id, message: 'Exam Created.' });
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: 'Please try after some time.' });
    }
}


exports.getExam = async function (req, res) {
    try {
        const exams = await Exam.find({}, '_id classId subject timeDuration questions.questionId questions.question questions.options questions.videoLink');
        res.send(exams);
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: 'Please try after some time.' });
    }
}


exports.getSingleExam = async function (req, res) {
    try {
        const exam = await Exam.findById(req.params.id).select('_id classId subject timeDuration questions.questionId questions.question questions.options questions.videoLink');
        if (!exam) {
            return res.status(404).send({ message: 'Exam not found' });
        }
        res.send(exam);
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: 'Please try after some time.' });
    }
}


exports.updateExam = async function (req, res) {
    try {
        const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!exam) {
            return res.status(404).send({ message: 'Exam not found' });
        }
        res.status(201).json({ message: 'Exam Details Updated.' });
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: 'Please try after some time.' });
    }
}


exports.deleteExam = async function (req, res) {
    try {
        const exam = await Exam.findByIdAndDelete(req.params.id);
        if (!exam) {
            return res.status(404).send({ message: 'Exam not found' });
        }
        res.send({ message: 'Exam deleted successfully' });
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: 'Please try after some time.' });
    }
}
