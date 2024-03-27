exports.classValidation = (req, res, next) => {

    const { className, lessons } = req.body;

    if (!className || typeof className !== 'string') {
        return res.status(400).json({ error: "Name is required and must be a string." });
    }

    if (!Array.isArray(lessons)) {
        return res.status(400).json({ error: 'Lessons must be an array' });
    }

    for (let i = 0; i < lessons.length; i++) {
        const { subject, lessonNumber, videoLink } = lessons[i];

        if (typeof subject !== 'string' || subject.trim() === '') {
            return res.status(400).json({ error: `Lesson ${i + 1}: Subject must be a non-empty string` });
        }
        if (typeof lessonNumber !== 'number') {
            return res.status(400).json({ error: `Lesson ${i + 1}: Lesson number must be a number` });
        }
        if (typeof videoLink !== 'string' || videoLink.trim() === '') {
            return res.status(400).json({ error: `Lesson ${i + 1}: Video link must be a non-empty string` });
        }
    }

    next();
};
