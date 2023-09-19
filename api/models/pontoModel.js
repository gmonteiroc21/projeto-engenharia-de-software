const pool = require('../config/db');
const data = new Date();

class Ponto {
    static async create(responsavel_id, endereco) {
        const result = await pool.query(
            'INSERT INTO ponto_de_coleta (responsavel_id, endereco, coletor_id, ultima_coleta, data_insercao, tem_lixo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [responsavel_id, endereco, null, null, data, false]
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
        const result = await pool.query(
            'SELECT id FROM usuarios WHERE id = $1',
            [id]
        );
        return result.rows[0];
    }

    static async findByColetor(id) {
        const result = await pool.query(
            'SELECT razao_social FROM entidade_coletora WHERE id = $1',
            [id]
        );
        return result.rows[0];
    }

    static async findPontoById(id) {
        const result = await pool.query(
            'SELECT endereco FROM ponto_de_coleta WHERE id = $1',
            [id]
        );
        console.log(result.rows)
        return result.rows;
    }

    static async verifyPonto(id) {
        const result = await pool.query(
            'SELECT * FROM ponto_de_coleta WHERE id = $1 and coletor_id IS NOT NULL',
            [id]
        );
        return result.rows[0];
    }

    static async verifyLixo(id) {
        const result = await pool.query(
            'SELECT * FROM ponto_de_coleta WHERE id = $1 and tem_lixo = true',
            [id]
        );
        return result.rows[0];

    }

    static async addLixo(id) {
        const result = await pool.query(
            'UPDATE ponto_de_coleta SET tem_lixo = true WHERE id = $1',
            [id]
        );
        return result.rows[0];
    }

    static async removeLixo(id) {
        const result = await pool.query(
            'UPDATE ponto_de_coleta SET tem_lixo = false WHERE id = $1',
            [id]
        );
        return result.rows[0];
    }

    static async updateDataColeta(id) {
        const result = await pool.query(
            'UPDATE ponto_de_coleta SET ultima_coleta = $1 WHERE id = $2',
            [data, id]
        );
        return result.rows[0];
    }

    static async removeColetor(id) {
        const result = await pool.query(
            'UPDATE ponto_de_coleta SET coletor_id = null WHERE id = $1',
            [id]
        );
        return result.rows[0];
    }

    static async findPontos(coletor_id) {
        const result = await pool.query(
            'SELECT endereco FROM ponto_de_coleta WHERE coletor_id = $1',
            [coletor_id]
        );
        return result.rows;
    }

    static async deletarPonto(id) {
        const result = await pool.query(
            'DELETE FROM ponto_de_coleta WHERE id = $1',
            [id]
        );
        return result.rows;
    }


}

module.exports = Ponto;