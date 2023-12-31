const pool = require('../config/db');
const bcrypt = require('bcrypt');
const date = new Date();

class Coletor {

    static async create(cnpj, razao_social, senha, email) {
        const hashedPassword = await bcrypt.hash(senha, 10);
        const result = await pool.query(
            'INSERT INTO entidade_coletora (cnpj, razao_social, senha, email, data_insercao) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [cnpj, razao_social, hashedPassword, email, date]
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

    static async addPonto(coletor_id, id) {
        const result = await pool.query(
            'UPDATE ponto_de_coleta SET coletor_id = $1 WHERE id = $2 RETURNING *',
            [coletor_id, id]
        );
        return result.rows[0];
    }

    static async deletarConta(id) {
        const result = await pool.query(
            'DELETE FROM entidade_coletora WHERE id = $1 RETURNING *',
            [id]
        );
        return result.rows[0];
    }


}
module.exports = Coletor;
