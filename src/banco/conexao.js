const pg = require("pg");

const conString = "pg://ecycle:Gh5SYQO4F-iIWRxOa361Eg@e-cycle.cmarkbil1dof.us-east-2.rds.amazonaws.com:5432/bd_ecycle";
const client = new pg.Client({
    connectionString: conString,
    ssl: { rejectUnauthorized: false } // Ignorar a validação do certificado
});

client.connect(async function(err) {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
    } else {
        console.log("Conexão bem-sucedida ao banco de dados.");

        try {
            const query = "SELECT * FROM teste;";
            const result = await client.query(query);

            console.log("Registros da tabela 'teste':");
            console.log(result.rows);
        } catch (error) {
            console.error("Erro ao buscar registros da tabela:", error);
        } finally {
            client.end(); // Lembre-se de encerrar a conexão quando terminar.
        }
    }
});
