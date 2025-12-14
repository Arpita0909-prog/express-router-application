const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const booksRouter = require('./books');
const studentsRouter = require('./students');
const coursesRouter = require('./courses');

app.use('/courses', coursesRouter);

app.use('/students', studentsRouter);
app.use('/books', booksRouter);
app.use((req, res) => {
  res.status(404).json({ message: 'Page  not found' });
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});