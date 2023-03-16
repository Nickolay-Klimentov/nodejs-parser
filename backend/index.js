require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const linksRouter = require('./routes/links.routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/links', linksRouter);

app
  .listen(PORT)
  .on('listening', () => {
    console.log(`Server listening port ${PORT}`);
  })
  .on('error', (error) => {
    console.log(`Connecting error: ${error.message}`);
  });
