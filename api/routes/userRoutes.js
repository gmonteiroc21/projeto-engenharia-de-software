const express = require('express');
const userControllerCadastrar = require('../controllers/userControllers/cadastro');
const userControllerLogar = require('../controllers/userControllers/login');
const userControllerCadastrarPonto = require('../controllers/userControllers/cadastroPonto');
const Authentication = require('../middlewares/authMiddleware');

const router = express.Router();

// Rota para criar um novo usuário
router.post('/cadastrar', userControllerCadastrar);

// Rota para logar um usuário
router.post('/login', userControllerLogar);

// Rota para criar um novo ponto
router.post('/cadastrarPonto', Authentication.verifyToken, userControllerCadastrarPonto);

module.exports = router;
