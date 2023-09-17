const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/userModel');
const config = require('../../config/config');

const userController = {};

module.exports = userController.login = async (req, res, next) => {
  const { email, senha } = req.body;
  const user = await User.findByEmail(email);
  if (!user) return res.status(400).send('Email ou senha inválidos');
  const validPass = await bcrypt.compare(senha, user.senha);
  if (!validPass) return res.status(400).send('Email ou senha inválidos');

  const token = jwt.sign({ user }, config.SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
};


