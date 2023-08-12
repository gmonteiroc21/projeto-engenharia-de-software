const { Client } = require('pg');


class Database {
    constructor(stringDeConexao) {
        this.conString = stringDeConexao;
        this.client = new Client({
            connectionString: this.conString,
            ssl: { rejectUnauthorized: false }
        });
    }

    async conectar() {
        try {
            await this.client.connect();
            console.log("Conexão bem-sucedida ao banco de dados.");
            return "Connected";
        } catch (error) {
            console.error("Erro ao conectar ao banco de dados:", error);
            return "Not connected"
        }
    }

    async consultar(query) {
        try {
            const result = await this.client.query(query);
            console.log("Registros da tabela:");
            console.log(result.rows);
            return result;
        } catch (error) {
            console.error("Erro ao executar a consulta:", error);
        }
    }

    fecharConexao() {
        this.client.end()
            .then(() => {
                console.log("Conexão fechada.");
            })
            .catch(error => {
                console.error("Erro ao fechar a conexão:", error);
            });
    }

}

module.exports = Database;

/*  -- Mock

async function main() {
    const db = new Database();

    try {
        await db.conectar();
        console.log(c);
        const query = "SELECT * FROM teste;";
        await db.consultar(query);

    } catch (error) {
        console.error("Erro durante a execução:", error);
    } finally {
        db.fecharConexao();
    }
}

main();*/