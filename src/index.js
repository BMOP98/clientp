const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3004;

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/register', require('./Users/register'));
app.use('/verify', require('./Users/verify'));

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
