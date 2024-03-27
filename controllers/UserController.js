const User = require('../models/User');
const jwt = require('jsonwebtoken');


exports.register = async function (req, res) {
    try {

        const { name, email, password } = req.body;
        const exsistingUser = await User.findOne({ email });

        if (exsistingUser) {
            return res.status(400).json({ message: 'Email alredy Exsist! Please login.' });
        }

        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: 'Please try after some time.' });
    }

}


exports.login = async function (req, res) {
    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ user : user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: 'Please try after some time.' });
    }
}


exports.verifyToken = async function (req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            return res.status(403).json({ message: 'Invalid token Please Login' });
        }
        req.user = decoded;
        next();
    });
};

exports.isAdmin = async function(req,res, next){
    if (req.user.role != 'ADMIN') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
}