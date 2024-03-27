const mongoose = require('mongoose');


const lessonSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  lessonNumber: {
    type: Number,
    required: true
  },
  videoLink: {
    type: String,
    required: true
  }
}, { _id: false });


const classSchema = new mongoose.Schema({
  className: {
    type: String,
    unique: true,
    required: true
  },
  lessons: [lessonSchema]
},
  { versionKey: false });

module.exports = mongoose.model('ClassRoom', classSchema);