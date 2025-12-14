const express = require('express');
const router = express.Router();
const books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

router.get('/', (req, res) => {
    res.json({ message: 'Here is the list of books',data: books });
});
router.post('/', (req, res) => {
    const { title, author } = req.body;
    const newBook={id: books.length + 1, title, author};
    books.push(newBook);
    res.status(201).json({ message: 'Book has been added!',data: newBook });
});
module.exports = router;