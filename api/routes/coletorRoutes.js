const express = require('express');
const coletorControllerCadastrar = require('../controllers/coletorControllers/cadastro');
const coletorControllerLogar = require('../controllers/coletorControllers/login');
const coletorControllerAddPonto = require('../controllers/coletorControllers/addPonto');
const Authentication = require('../middlewares/authMiddleware');

const router = express.Router();

// Rota para criar um novo coletor
router.post('/cadastrar', coletorControllerCadastrar);

// Rota para logar um coletor
router.post('/login', coletorControllerLogar);

// Rota para atribuir um ponto para um coletor
router.post('/addPonto', Authentication.verifyToken, coletorControllerAddPonto);

module.exports = router;