const Ponto = require('../../models/pontoModel');
const Coletor = require('../../models/coletorModel');
const Authentication = require('../../middlewares/authMiddleware');
const coletorController = {};

module.exports = coletorController.addPonto = async (req, res) => {
    const { coletor_id, ponto_id} = req.body;

    // Verifique o token do coletor logado
    const token = req.header('Authorization');
    const bearerToken = Authentication.getBearer(token);
    const user = Authentication.verifyUser(bearerToken);

    // Verifique se o coletor logado é o mesmo que o coletor_id
    if (user.coletor.id !== coletor_id) {
        return res.status(401).json({ message: 'Você não pode cadastrar um ponto para outra entidade!' });
    }

    const existingPonto = await Ponto.findPontoById(ponto_id);
    if (!existingPonto) {
        return res.status(404).json({ message: 'Ponto não encontrado!' });
    }

    const existingColetor = await Ponto.verifyPonto(ponto_id);
    if (existingColetor) {
        return res.status(401).json({ message: 'Esse ponto já está cadastrado para outro coletor!' });
    }

    await Coletor.addPonto(coletor_id, ponto_id);
    res.json({ 'message': 'Ponto adicionado com sucesso', 'endereco': existingPonto });

}
