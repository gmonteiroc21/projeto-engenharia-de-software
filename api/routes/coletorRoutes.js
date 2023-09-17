const express = require('express');
const coletorControllerCadastrar = require('../controllers/coletorControllers/cadastro');
const coletorControllerLogar = require('../controllers/coletorControllers/login');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Rota para criar um novo usuário
router.post('/cadastrar', coletorControllerCadastrar);

// Rota para logar um usuário
router.post('/login', coletorControllerLogar);

module.exports = router;