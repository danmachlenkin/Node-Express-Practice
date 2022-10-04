const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const app = express();

//App midlleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello from the widdleware!');
  next();
});

const tourRouter = require(`${__dirname}/routes/tourRouts`);
const usersRouter = require(`${__dirname}/routes/usersRouts`);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', usersRouter);

module.exports = app;
