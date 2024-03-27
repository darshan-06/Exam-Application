exports.registerValidation = (req, res, next) => {
    const {rollNumber, gender, classId } = req.body;

    
    if (!rollNumber || typeof rollNumber !== 'number') {
        return res.status(400).json({ error: "Roll number is required and must be a number." });
    }

    if (gender && !isValidGender(gender.toLowerCase())) {
        return res.status(400).json({ error: "Invalid gender." });
    }

    if (classId && typeof classId !== 'string') {
        return res.status(400).json({ error: "Invalid class room." });
    }

    next();
};

const isValidGender = (gender) => {
    return gender === 'male' || gender === 'female';
};
