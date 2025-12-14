const express = require('express');
const app = express();
const port = 3000;
const booksRouter = require('./books');

app.use(express.json());
app.use('/books', booksRouter);

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});