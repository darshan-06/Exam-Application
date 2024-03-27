const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['STUDENT', 'ADMIN'],
        default: 'ADMIN'
    }
},
{ versionKey: false });

userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword, next) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        next(error);
    }
};

module.exports = mongoose.model('User', userSchema);
