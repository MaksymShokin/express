const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('inside users');
  res.send('<h1>Users from express</h1>')
})

app.use('/', (req, res, next) => {
  console.log('inside another middlleware');
  res.send('<h1>Hello from express</h1>')
})

app.listen(3000);


