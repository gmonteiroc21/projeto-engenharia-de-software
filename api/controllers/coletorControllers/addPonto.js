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

    // Verifique se o ponto existe
    const existingPonto = await Ponto.findPontoById(ponto_id);
    if (!existingPonto) {
        return res.status(404).json({ message: 'Ponto não encontrado!' });
    }

    // Verifique se o ponto já está cadastrado
    const existingColetor = await Ponto.verifyPonto(ponto_id);
    if (existingColetor && existingColetor.coletor_id === coletor_id) { // Se o ponto já estiver cadastrado para o coletor passado
        return res.status(401).json({ message: 'Esse ponto já está cadastrado para esse coletor!' });
    } else if (existingColetor) { // Se o ponto já estiver cadastrado para outro coletor
        return res.status(401).json({ message: 'Esse ponto já está cadastrado para outro coletor!' });
    }

    // Verifique se o ponto possui lixo
    const existingLixo = await Ponto.verifyLixo(ponto_id);
    if (!existingLixo) {
        return res.status(401).json({ message: 'Esse ponto não possui lixo para ser coletado!' });
    }

    // Adicione o ponto ao coletor
    await Coletor.addPonto(coletor_id, ponto_id);
    res.json({ 'message': 'Ponto adicionado com sucesso', existingPonto });

}
