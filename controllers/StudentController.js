const Student = require('../models/Student');


exports.postStudent = async function (req, res) {
   try {

    const email = req.body.email;
    const exsistingUser = await Student.findOne({ email });

    if (exsistingUser) {
      return res.status(400).json({ message: 'Email alredy Exsist!' });
    }

    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ id:student._id, message: 'Student Created.' });

  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Please try after some time.' });
  }
}


exports.getStudent = async function (req, res) {

  try {
    const students = await Student.find({}, 'name email rollNumber gender classId');
    res.send(students);
    
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Please try after some time.' });  }
}


exports.getSingleStudent = async function (req, res) {
  try {
    const student = await Student.findById(req.params.id).select('name email rollNumber gender classId');
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.send(student);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Please try after some time.' });
  }
}


exports.updateStudent = async function (req, res) {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.status(201).json({ message: 'Student Details Updated.' });
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Please try after some time.' });
  }
}


exports.deleteStudent = async function (req, res) {

  if (req.user.role != 'ADMIN') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.send({ message: 'Student deleted successfully' });
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Please try after some time.' });
  }
}