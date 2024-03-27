const mongoose = require('mongoose');
const User = require('./User');

const studentSchema = new mongoose.Schema({
    rollNumber: {
        type: Number,
        unique: true,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    classId: {
        type:  mongoose.Schema.Types.ObjectId,
        required: true
    },
},
{ versionKey: false });

const options = { discriminatorKey: 'kind' };
const Student = User.discriminator('Student', studentSchema, options);

module.exports = Student;