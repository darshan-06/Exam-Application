const ClassRoom = require('../models/ClassRoom');


exports.createClassRoom = async function (req, res) {
  try {
    const className = req.body.className;

    const exsistingClassroom = await ClassRoom.findOne({ className });

    if (exsistingClassroom) {
      return res.status(400).json({ message: 'Class Room alredy Exsist!' });
    }

    const classroom = new ClassRoom(req.body);
    await classroom.save();
    res.status(201).json({ id:classroom._id, message: 'Class Room Created.' });

  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: error.message });
  }

}


exports.getClassRoom = async function (req, res) {
  try {

    const classrooms = await ClassRoom.find();
    res.send(classrooms);

  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: 'Please try after some time.' });
  }

}


exports.getSingleClassRoom = async function (req, res) {
  try {
    const classroom = await ClassRoom.findById(req.params.id);
    if (!classroom) {
      return res.status(404).send({ message: 'Classroom not found' });
    }
    res.send(classroom);
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: 'Please try after some time.' });
  }
}


exports.updateClassRoom = async function (req, res) {
  try {
    const classroom = await ClassRoom.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!classroom) {
      return res.status(404).send({ message: 'Classroom not found' });
    }
    res.send(classroom);
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: 'Please try after some time.' });
  }
};


exports.deleteClassRoom = async function (req, res) {
  try {
    const classroom = await ClassRoom.findByIdAndDelete(req.params.id);
    if (!classroom) {
      return res.status(404).send({ message: 'Classroom not found' });
    }
    res.send({ message: 'Classroom deleted successfully' });
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: 'Please try after some time.' });
  }
};