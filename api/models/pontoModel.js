const pool = require('../config/db');
const data = new Date();

class Ponto {
    static async create(responsavel_id, endereco, coletor_id) {
        const result = await pool.query(
            'INSERT INTO ponto_de_coleta (responsavel_id, endereco, coletor_id, ultima_coleta, data_insercao) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [responsavel_id, endereco, coletor_id, null, data]
        );
        return result.rows[0];
    }

    static async findByEndereco(endereco) {
        const result = await pool.query(
            'SELECT * FROM ponto_de_coleta WHERE endereco = $1',
            [endereco]
        );
        return result.rows[0];
    }

    static async findByResponsavel(id) {
        const resulta = await pool.query(
            'SELECT * FROM usuarios WHERE id = $1',
            [id]
        );
        return resulta.rows[0];
    }

    static async findByColetor(id) {
        const resulta = await pool.query(
            'SELECT * FROM entidade_coletora WHERE id = $1',
            [id]
        );
        return resulta.rows[0];
    }
}

module.exports = Ponto;