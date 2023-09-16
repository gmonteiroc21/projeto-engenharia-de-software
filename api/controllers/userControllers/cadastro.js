const bcrypt = require('bcrypt');
const User = require('../../models/userModel');
const config = require('../../config/config');

const userController = {};

module.exports = userController.create = async (req, res) => {
    const { email, senha, nome, telefone } = req.body;

    const existingUser = await User.findByEmailOrPhone(email, telefone);
    if (existingUser) {
        return res.status(400).json({ message: 'Email ou telefone já existem' });
    }

    const user = await User.create(email, senha, nome, telefone);
    res.json({'message': 'Usário criado com sucesso'});
};
