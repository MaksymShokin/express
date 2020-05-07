const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('inside middlleware');
  next(); // allow to travel to the next middleware
})

app.use((req, res, next) => {
  console.log('inside another middlleware')
})

const server = http.createServer(app);

server.listen(3000)


//npm install --save express
