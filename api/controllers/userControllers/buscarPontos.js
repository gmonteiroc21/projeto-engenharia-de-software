const Ponto = require('../../models/pontoModel');
const Authentication = require('../../middlewares/authMiddleware');
const User = require('../../models/userModel');
const userController = {};


module.exports = userController.buscarPontos = async (req, res) => {

    // Verifique o token do coletor logado
    const token = req.header('Authorization');
    const bearerToken = Authentication.getBearer(token);
    const user = Authentication.verifyUser(bearerToken);

    const coletorId = user.user.id

    if (!coletorId) {
        return res.status(401).json({ message: 'Você precisa estar logado como usuário' });
    }
    
    const pontos = await User.findPontos(coletorId);

    if (pontos.length == 0) {
        return res.status(404).json({ message: 'Nenhum ponto encontrado' });
    }

    return res.status(200).json(pontos);
}

