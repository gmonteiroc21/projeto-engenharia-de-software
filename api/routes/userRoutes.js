const express = require('express');
const userControllerCadastrar = require('../controllers/userControllers/cadastro');
const userControllerLogar = require('../controllers/userControllers/login');
const userControllerCadastrarPonto = require('../controllers/userControllers/cadastroPonto');
const userAtualizacoesController = require('../controllers/userControllers/atualizacoesController');
const userDeletarContaController = require('../controllers/userControllers/deletarContaController');
const userControllerAddLixo = require('../controllers/userControllers/addLixo');
const userControllerListarPontos = require('../controllers/userControllers/buscarPontos');
const userControllerDeletarPonto = require('../controllers/userControllers/deletarPonto')
const Authentication = require('../middlewares/authMiddleware');

const router = express.Router();

// Rota para criar um novo usuário
router.post('/cadastrar', userControllerCadastrar);

// Rota para logar um usuário
router.post('/login', userControllerLogar);

// Rota para criar um novo ponto
router.post('/cadastrarPonto', Authentication.verifyToken, userControllerCadastrarPonto);

// Rota para atualizar telefone, e-mail ou senha do usuário
router.put('/atualizar', Authentication.verifyToken, userAtualizacoesController);

//Rota para deletar conta do usuário
router.put('/deletar', Authentication.verifyToken, userDeletarContaController)

// Rota para adicionar lixo a um ponto
router.put('/addLixo', Authentication.verifyToken, userControllerAddLixo);

//Rota para deletar um ponto de coleta
router.put('/deletarPonto', Authentication.verifyToken, userControllerDeletarPonto);

// Rota para listar os pontos de um usuário
router.get('/pontos', Authentication.verifyToken, userControllerListarPontos);



module.exports = router;
