// config.js
require('dotenv').config({ path: './.env' });

module.exports = {
    PGHOST: process.env.PGHOST,
    PGUSER: process.env.PGUSER,
    PGPASSWORD: process.env.PGPASSWORD,
    PGDATABASE: process.env.PGDATABASE,
    PGPORT: process.env.PGPORT,
    SECRET_KEY: process.env.SECRET_KEY

  };
  