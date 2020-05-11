const path = require('path');

const express = require('express');

const routeDir = require('../helpers/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products)
  res.sendFile(path.join(routeDir, 'views', 'shop.html'))
});

module.exports = router