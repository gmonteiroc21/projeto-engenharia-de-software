const Coletor = require('../../models/coletorModel');
const Authentication = require('../../middlewares/authMiddleware');
const deletarContaController = {}


module.exports = deletarContaController.deletar_conta = async (req, res) => {

    const { id } = req.body; // id do usuário coletor a ser excluído
    const token = req.header('Authorization');
    const bearerToken = Authentication.getBearer(token);

    const user = Authentication.verifyUser(bearerToken);
    try {
        if (user.coletor.id !== id) {
            return res.status(401).json({ error: 'Você não tem permissão para excluir esta conta.' });
        }

        const deletarUsuarioColetor = await Coletor.deletarConta(id); // função para excluir a conta do usuário
        if (!deletarUsuarioColetor) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        res.json({ message: 'Conta deletada.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir a conta.' });
    }
};

