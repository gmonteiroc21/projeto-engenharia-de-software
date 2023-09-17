const pool = require('../config/db');
const bcrypt = require('bcrypt');

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
      'INSERT INTO usuarios (email, senha, nome, telefone) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, hashedPassword, nome, telefone]
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

  // Add other methods as needed
}

module.exports = User;
