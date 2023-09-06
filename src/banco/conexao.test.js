const Database = require('./conexao'); // Certifique-se de ajustar o nome do arquivo corretamente
const func_conString = require("./connection_string");

describe('Database', () => {
    let db;

    beforeEach(() => {
        db = new Database(func_conString.conString);
    });

    afterEach(async () => {
        await db.fecharConexao();
        await new Promise(resolve => setTimeout(resolve, 100)); // Aguarda um curto período
        console.log("Conexão fechada.");
    });
    

    it('deve conectar ao banco de dados', async () => {
        const resultado = await db.conectar();
        expect(resultado).toBe('Connected'); // Usando a sintaxe do Jest
        expect(db.client._connected).toBe(true);
    });

    it('deve falhar a conexao se a string de conexao for invalida', async () => {
        db = new Database('postgres://postgres:postgres@localhost:5432/invalida');
        const resultado = await db.conectar();
        expect(resultado).toBe('Not connected');
        expect(db.client._connected).toBe(false);
    });

    it('deve executar uma consulta e retornar um cliente da tabela de testes', async () => {
        await db.conectar();
        const query = "SELECT * FROM teste;";
        const resultado = await db.consultar(query);
        expect(resultado.rowCount).toBe(1);
    });
});
