const Ponto = require('../../models/pontoModel');
const Authentication = require('../../middlewares/authMiddleware');
const userController = {};

module.exports = userController.addLixo = async (req, res) => {
    const { responsavel_id, ponto_id } = req.body;

    // Verifique o token do usuário logado
    const token = req.header('Authorization');
    const bearerToken = Authentication.getBearer(token);
    const user = Authentication.verifyUser(bearerToken);

    // Verifique se o usuário logado é o mesmo que o responsável
    if (user.user.id !== responsavel_id) {
        return res.status(401).json({ message: 'Você não pode adicionar lixo no ponto de outro usuário' });
    }

    // Verifique se o ponto existe
    const ponto = await Ponto.findPontoById(ponto_id);
    if (!ponto) {
        return res.status(404).json({ message: 'Ponto não encontrado' });
    }

    // Verifique se o ponto já possui lixo
    const existingLixo = await Ponto.verifyLixo(ponto_id);
    if (existingLixo) {
        return res.status(401).json({ message: 'Esse ponto já possui lixo' });
    }
    
    await Ponto.addLixo(ponto_id);
    res.json({ 'message': 'Lixo adicionado com sucesso' });

}
