const Ponto = require('../../models/pontoModel');
const Authentication = require('../../middlewares/authMiddleware');
const userController = {};

module.exports = userController.createPonto = async (req, res) => {
    const { responsavel_id, endereco} = req.body;

    // Verifique o token do usuário logado
    const token = req.header('Authorization');
    const bearerToken = Authentication.getBearer(token);
    const user = Authentication.verifyUser(bearerToken);

    // Verifique se o usuário logado é o mesmo que o responsável
    if (user.id !== responsavel_id) {
        return res.status(401).json({ message: 'Você não pode cadastrar um ponto para outro usuário!' });
    }

    const existingPonto = await Ponto.findByEndereco(endereco);
    if (existingPonto) {
        return res.status(400).json({ message: 'Já existe um ponto cadastrado com esse endereço' });
    }


    await Ponto.create(responsavel_id, endereco, coletor_id);
    res.json({ 'message': 'Ponto cadastrado com sucesso' });

}
