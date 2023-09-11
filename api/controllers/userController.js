const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const userController = {};

userController.create = async (req, res, next) => {
  const user = req.body;
  user.senha = bcrypt.hashSync(user.senha, 10);
  try {
    const userId = await User.create(user);
    res.json({ id: userId });
  } catch (err) {
    next(err);
  }
};

userController.login = async (req, res, next) => {
  const { email, senha } = req.body;
  try {
    const user = await User.findByEmail(email);
    if (!user || !bcrypt.compareSync(senha, user.senha)) {
      res.status(401).json({ error: 'Invalid email or senha' });
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = userController;
