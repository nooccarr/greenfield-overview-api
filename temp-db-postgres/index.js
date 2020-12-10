const pgp = require('pg-promise')(/* options */);
const { config } = require('./config.js');

const db = pgp(config);

module.exports = db;