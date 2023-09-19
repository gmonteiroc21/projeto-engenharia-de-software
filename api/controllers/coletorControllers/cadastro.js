const bcrypt = require('bcrypt');
const Coletor = require('../../models/coletorModel');
const config = require('../../config/config');

const coletorControllers = {};

module.exports = coletorControllers.create = async (req, res) => {
    const { cnpj, razao_social, senha, email } = req.body;

    const existingUser = await Coletor.findByCnpjOrRazaoSocial(cnpj, razao_social);
    if (existingUser) {
        return res.status(400).json({ message: 'Cnpj ou Razão Social já existe' });
    }

    const coletor = await Coletor.create(cnpj, razao_social, senha, email);
    res.json({ 'message': 'Entidade coletora cadastrada com sucesso' });
};
