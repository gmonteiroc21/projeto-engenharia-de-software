const { Pool } = require('pg');

const pool = new Pool({
  host: 'e-cycle.cmarkbil1dof.us-east-2.rds.amazonaws.com',
  port: 5432,
  database: 'bd_ecycle',
  user: 'ecycle',
  password: 'Gh5SYQO4F-iIWRxOa361Eg',
  ssl: {
    rejectUnauthorized: false
    }
});

module.exports = pool;
