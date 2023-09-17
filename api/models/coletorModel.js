const pool = require('../config/db');
const bcrypt = require('bcrypt');
const date = new Date();

class Coletor {

    static async create(cnpj, razao_social, senha) {
        const hashedPassword = await bcrypt.hash(senha, 10);
        const result = await pool.query(
            'INSERT INTO entidade_coletora (cnpj, razao_social, senha, data_insercao) VALUES ($1, $2, $3, $4) RETURNING *',
            [cnpj, razao_social, hashedPassword, date]
        );
        return result.rows[0];
    }

    static async findByCnpjOrRazaoSocial(cnpj, razao_social) {
        const result = await pool.query(
            'SELECT * FROM entidade_coletora WHERE cnpj = $1 OR razao_social = $2',
            [cnpj, razao_social]
        );
        return result.rows[0];
    }

    static async findByCnpj(cnpj) {
        const result = await pool.query(
            'SELECT * FROM entidade_coletora WHERE cnpj = $1',
            [cnpj]
        );
        return result.rows[0];
    }

    static async createPonto(responsavel_id, endereco, coletor_id) {
        const result = await pool.query(
            'INSERT INTO ponto_de_coleta (responsavel_id, endereco, coletor_id, ultima_coleta, data_insercao) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [responsavel_id, endereco, coletor_id, null, data]
        );
        return result.rows[0];
    }
}

module.exports = Coletor;
