const express = require('express');
const userControllerCadastrar = require('../controllers/userControllers/cadastro');
const userControllerLogar = require('../controllers/userControllers/login');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Rota para criar um novo usuário
router.post('/cadastrar', userControllerCadastrar);

// Rota para logar um usuário
router.post('/login', userControllerLogar);

module.exports = router;
