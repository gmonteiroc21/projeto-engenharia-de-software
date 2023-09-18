const express = require('express');
const userControllerCadastrar = require('../controllers/userControllers/cadastro');
const userControllerLogar = require('../controllers/userControllers/login');
const userControllerCadastrarPonto = require('../controllers/userControllers/cadastroPonto');
const userAtualizacoesController = require('../controllers/userControllers/atualizacoesController');
const userDeletarContaController = require('../controllers/userControllers/deletarContaController');
const Authentication = require('../middlewares/authMiddleware');

const router = express.Router();

// Rota para criar um novo usuário
router.post('/cadastrar', userControllerCadastrar);

// Rota para logar um usuário
router.post('/login', userControllerLogar);

// Rota para criar um novo ponto
router.post('/cadastrarPonto', Authentication.verifyToken, userControllerCadastrarPonto);

// Rota para atualizar qualquer campo do usuário
router.put('/atualizar', Authentication.verifyToken, userAtualizacoesController);

//Rota para deletar conta do usuário
router.put('/deletar', Authentication.verifyToken, userDeletarContaController)

module.exports = router;
