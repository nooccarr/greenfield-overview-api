// const newRelic = require('newrelic');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const db = require('../db-postgres/index.js');

app.use(express.static('./dist'));
app.use(bodyParser.json());

const router = require('./routes.js');
app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));