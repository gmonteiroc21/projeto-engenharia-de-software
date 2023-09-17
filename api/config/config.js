// config.js
require('dotenv').config({ path: './.env' });

var config = {}
function carregarVariaveis(config) {
  if (process.env.ENV == "prod") {
    config = {
      PGHOST: process.env.PGHOST_PROD,
      PGUSER: process.env.PGUSER_PROD,
      PGPASSWORD: process.env.PGPASSWORD_PROD,
      PGDATABASE: process.env.PGDATABASE_PROD,
      PGPORT: process.env.PGPORT_PROD,
      SECRET_KEY: process.env.SECRET_KEY
    }
  } else if (process.env.ENV == "hom") {
    config = {
      PGHOST: process.env.PGHOST_HOM,
      PGUSER: process.env.PGUSER_HOM,
      PGPASSWORD: process.env.PGPASSWORD_HOM,
      PGDATABASE: process.env.PGDATABASE_HOM,
      PGPORT: process.env.PGPORT_HOM,
      SECRET_KEY: process.env.SECRET_KEY
    }
  }
  return config

}


config = carregarVariaveis(config)
module.exports = config;

