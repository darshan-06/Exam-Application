exports.registerValidation = (req, res, next) => {
    const { name, email, password, confirmPassword, role } = req.body;

    if (!name || typeof name !== 'string') {
        return res.status(400).json({ error: "Name is required and must be a string." });
    }

    if (!email || !isValidEmail(email.toLowerCase())) {
        return res.status(400).json({ error: "Valid email is required." });
    }

    if (!password || typeof password !== 'string' || password.length < 6) {
        return res.status(400).json({ error: "Password is required and must be at least 6 characters long." });
    }

    if (!confirmPassword || typeof confirmPassword !== 'string' || confirmPassword.length < 6) {
        return res.status(400).json({ error: "Confirm Password is required" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Password and confirm password do not match." });
    }

    if (role && !isValidRole(role)) {
        return res.status(400).json({ error: "Invalid role." });
    }

    next();
};

exports.loginValidation = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !isValidEmail(email)) {
        return res.status(400).json({ error: "Valid email is required." });
    }

    if (!password || typeof password !== 'string' || password.length < 6) {
        return res.status(400).json({ error: "Password is required and must be at least 6 characters long." });
    }

    next();
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidRole = (role) => {
    const validRoles = ['ADMIN', 'STUDENT'];
    return validRoles.includes(role);
};
