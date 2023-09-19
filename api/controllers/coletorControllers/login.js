const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Coletor = require('../../models/coletorModel');
const config = require('../../config/config');

const coletorControllers = {};

module.exports = coletorControllers.login = async (req, res, next) => {
    const { cnpj, senha } = req.body;
    const coletor = await Coletor.findByCnpj(cnpj);
    if (!coletor) return res.status(400).send('Cnpj ou senha inválidos');
    const validPass = await bcrypt.compare(senha, coletor.senha);
    if (!validPass) return res.status(400).send('Cnpj ou senha inválidos');

    const token = jwt.sign({ coletor }, config.SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
};


