const User = require('../../models/userModel')
const Authentication = require('../../middlewares/authMiddleware');

const atualizacoesController = {};

// Mapeamento de campos para funções do modelo User
const updatesUsuario = {
    email: User.updateEmail,
    senha: User.updateSenha,
    telefone: User.updateTelefone,
};

module.exports = atualizacoesController.updateCampos = async (req, res) => {


    const { id, campo, valorAlterado } = req.body;

    const token = req.header('Authorization');
    const bearerToken = Authentication.getBearer(token);

    try {
        const user = Authentication.verifyUser(bearerToken);

        if (user.user.id !== id) {

            return res.status(401).json({ error: 'Você não tem permissão para atualizar este usuário.' });

        }

        const updates = updatesUsuario[campo];


        await updates(id, valorAlterado);
        res.json({ message: campo + " alterado com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar o campo.' });
    }
};
