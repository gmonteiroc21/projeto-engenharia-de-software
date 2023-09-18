const User = require('../../models/userModel');
const Authentication = require('../../middlewares/authMiddleware');
const deletarContaController = {}


module.exports = deletarContaController.deletar_conta = async (req, res) => {

    const { id } = req.body; // id do usuário a ser excluído coletado a partir do JSON

    try {
        const token = req.header('Authorization');
        const bearerToken = Authentication.getBearer(token);

        const user = Authentication.verifyUser(bearerToken);

        if (user.user.id !== id) {
            return res.status(401).json({ error: 'Você não tem permissão para excluir esta conta.' });
        }

        const deletarUsuario = await User.deletarConta(id); // função para excluir a conta do usuário
        if (!deletarUsuario) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        res.json({ message: 'Conta deletada.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir a conta.' });
    }
};

