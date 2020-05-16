const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// template engine
app.set('view engine', 'pug');

// views folder
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render(path.join(__dirname, './', 'views', '404'), {title: 'Page not found pug'});
})

app.listen(3000);

// templating engines
// npm install ejs pug express-handlebars

