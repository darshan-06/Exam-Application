const Result = require('../models/Result');
const Exam = require('../models/Exam');

exports.postResult = async function (req, res) {
  try {
    const result = new Result(req.body);
    const exam = await Exam.findById(req.body.examId);

    let totalScore = 0;
    let answers = result.answers;
    answers.forEach(answer => {
      const question = exam.questions.find(q => q.questionId === answer.questionId);
      if (question) {
        const isCorrect = answer.selectedOption.every(selected => question.answer.includes(selected));

        if (isCorrect) {
          totalScore++;
        }
      }
    });

    result.totalScore = totalScore;
    result.studentId = req.user.user;
    await result.save();
    res.status(201).json({ id: result._id, message: 'Exam Submitted.' });
  } catch (error) {
    res.status(400).send(error);
  }
}


exports.getResult = async function (req, res) {
  try {
    const results = await Result.find();
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
}


exports.getSingleResult = async function (req, res) {
  try {
    const result = await Result.findById(req.params.id);
    if (!result) {
      return res.status(404).send({ message: 'Result not found' });
    }
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
}


exports.updateResult = async function (req, res) {
  try {
    const result = new Result(req.body);
    const exam = await Exam.findById(req.body.examId);

    let totalScore = 0;
    let answers = result.answers;
    answers.forEach(answer => {
      const question = exam.questions.find(q => q.questionId === answer.questionId);
      if (question) {
        const isCorrect = answer.selectedOption.every(selected => question.answer.includes(selected));

        if (isCorrect) {
          totalScore++;
        }
      }
    });

    result.totalScore = totalScore;
    result.studentId = req.user.user;

    const resultUpdated = await Result.findByIdAndUpdate(req.params.id, result, { new: true });
    if (!resultUpdated) {
      return res.status(404).send({ message: 'Result not found' });
    }
    res.status(201).json({ id: result._id, message: 'Exam Updated.' });
  } catch (error) {
    res.status(400).send(error);
  }
}


exports.deleteResult = async function (req, res) {
  try {
    const result = await Result.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).send({ message: 'Result not found' });
    }
    res.send({ message: 'Result deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
}