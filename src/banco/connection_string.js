const dotenv = require('dotenv');  // Importando a biblioteca dotenv
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') }); // Carregando as variáveis de ambiente 

// Função para criar a string de conexão
function createConnectionString(host, username, password, database, port) {
    return `postgres://${username}:${password}@${host}:${port}/${database}`;
}

const conString = createConnectionString(process.env.PGHOST, process.env.PGUSER, process.env.PGPASSWORD, process.env.PGDATABASE, process.env.PGPORT); // Criando a string de conexão

module.exports = {

    conString: conString, // Exportando a string de conexão
    createConnectionString: createConnectionString // Exportando a função para criar a string de conexão

};