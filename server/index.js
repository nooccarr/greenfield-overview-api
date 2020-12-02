const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const db = require('../db-postgres/index.js');

app.use(express.static('./dist'));
app.use(bodyParser.json());

// const router = require('./routes');
// app.use('/', router);

db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  });

app.listen(port, () => console.log(`Listening on port ${port}`));