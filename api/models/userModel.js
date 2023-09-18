const pool = require('../config/db');
const bcrypt = require('bcrypt');
var timestamp = new Date();

class User {

  static async findByEmailOrPhone(email, telefone) {
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1 OR telefone = $2',
      [email, telefone]
    );
    return result.rows[0];
  }

  static async create(email, senha, nome, telefone) {
    const hashedPassword = await bcrypt.hash(senha, 10);
    const result = await pool.query(
      'INSERT INTO usuarios (email, senha, nome, telefone, data_insercao) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [email, hashedPassword, nome, telefone, timestamp]
    );
    return result.rows[0];
  }

  static async findByEmail(email) {
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    return result.rows[0];
  }

  static async findById(id) {
    const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async createPonto(responsavel_id, endereco) {
    const result = await pool.query(
      'INSERT INTO ponto_de_coleta (responsavel_id, endereco, coletor_id, ultima_coleta, data_insercao) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [responsavel_id, endereco, null, null, timestamp]
    );
    return result.rows[0];
  }
  static async updateEmail(id, emailAlterado) {
    const result = await pool.query(
      'UPDATE usuarios SET email = $1 WHERE id = $2 RETURNING *',
      [emailAlterado, id]
    );
    return result.rows[0];
  }

  static async updateSenha(id, senhaAlterada) {
    const hashedPassword = await bcrypt.hash(senhaAlterada, 10);
    const result = await pool.query(
      'UPDATE usuarios SET senha = $1 WHERE id = $2 RETURNING *',
      [hashedPassword, id]
    );
    return result.rows[0];
  }

  static async updateTelefone(id, telefoneAlterado) {
    const result = await pool.query(
      'UPDATE usuarios SET telefone = $1 WHERE id = $2 RETURNING *',
      [telefoneAlterado, id]
    );
    return result.rows[0];
  }

  static async deletarConta(id) {
    const result = await pool.query(
      'DELETE FROM usuarios WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
  static async findPontos(responsavel_id) {
    const result = await pool.query(
      'SELECT endereco FROM ponto_de_coleta WHERE responsavel_id = $1',
      [responsavel_id]
    );
    return result.rows;
  }
}

module.exports = User;
