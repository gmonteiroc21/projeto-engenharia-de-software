const express = require('express');
const userControllerCadastrar = require('../controllers/userControllers/cadastro');
const userControllerLogar = require('../controllers/userControllers/login');
const userControllerCadastrarPonto = require('../controllers/userControllers/cadastroPonto');
const userControllerAddLixo = require('../controllers/userControllers/addLixo');
const Authentication = require('../middlewares/authMiddleware');

const router = express.Router();

// Rota para criar um novo usuário
router.post('/cadastrar', userControllerCadastrar);

// Rota para logar um usuário
router.post('/login', userControllerLogar);

// Rota para criar um novo ponto
router.post('/cadastrarPonto', Authentication.verifyToken, userControllerCadastrarPonto);

// Rota para adicionar lixo a um ponto
router.put('/addLixo', Authentication.verifyToken, userControllerAddLixo);

module.exports = router;
