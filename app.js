const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-user', (req, res, next) => {
  console.log('inside add user');
  res.send('<form action="/users" method="POST"><input type="text" name="userName"/><button>Add user</button></form>')
});

//app.get
//app.post

app.post('/users', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('inside another middlleware');
  res.send('<h1>Hello from express</h1>')
});

app.listen(3000);

//npm install --save body-parser
