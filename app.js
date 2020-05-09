const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('inside middlleware');
  next();
})

app.use((req, res, next) => {
  console.log('inside another middlleware');
  res.send('<h1>HEllo from express</h1>')
})

app.listen(3000);


