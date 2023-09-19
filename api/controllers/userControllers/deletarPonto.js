const Ponto = require('../../models/pontoModel');
const User = require('../../models/userModel');
const Authentication = require('../../middlewares/authMiddleware');
const userController = {};

module.exports = userController.deletarPontos = async (req, res) => {
    7
    try {
        const { id_ponto } = req.body;

        // Verifique o token do usuário logado
        const token = req.header('Authorization');
        const bearerToken = Authentication.getBearer(token);
        const user = Authentication.verifyUser(bearerToken);

        const pontos = await User.findIdPontos(user.user.id);
        const existePonto = pontos.some(ponto => ponto.id === id_ponto); // verifica se o usuário cadastrou o ponto anteriormente.


        if (pontos.length == 0) {
            return res.status(404).json({ message: 'Você não tem nenhum ponto cadastrado' });

        } else if (!existePonto) {
            return res.status(401).json({ message: 'Você não pode deletar um ponto para outro usuário!' });
        }

        await Ponto.deletarPonto(id_ponto);
        res.json({ 'message': 'Ponto deletado com sucesso' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir a conta.' });
    }

}
