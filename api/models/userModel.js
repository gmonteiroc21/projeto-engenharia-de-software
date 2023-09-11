const db = require('../config/db');

const User = {};

User.create = async (user) => {
  const query = 'INSERT INTO usuarios (email, senha, telefone, nome) VALUES ($1, $2, $3, $4) RETURNING id';
  const values = [user.email, user.senha, user.telefone, user.nome];
  const result = await db.query(query, values);
  return result.rows[0].id;
};

User.findByEmail = async (email) => {
  const query = 'SELECT * FROM usuarios WHERE email = $1';
  const result = await db.query(query, [email]);
  return result.rows[0];
};

module.exports = User;
