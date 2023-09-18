const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool({
  host: config.PGHOST,
  port: config.PGPORT,
  database: config.PGDATABASE,
  user: config.PGUSER,
  password: config.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
