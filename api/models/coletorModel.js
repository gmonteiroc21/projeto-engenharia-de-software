const pool = require('../config/db');
const bcrypt = require('bcrypt');
const date = Date();

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



    // Add other methods as needed
}

module.exports = Coletor;
