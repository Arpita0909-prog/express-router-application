const express = require('express');
const router = express.Router();
const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];
router.get('/', (req, res) => {
    const courseNames = courses.map(c => c.name).join(', ');
    res.send(`courses: ${courseNames}`);
});

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id)); 
    if (course) {
        res.json({ courseName: course.name, description: course.description });
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
});

module.exports = router;