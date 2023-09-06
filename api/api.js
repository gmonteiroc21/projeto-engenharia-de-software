const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;


app.use(bodyParser.json());


const pool = new pg.Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: { rejectUnauthorized: false }
});


app.post('/cadastrar', async (req, res) => {
  try {
    const { cpf, nome, telefone, email, senha } = req.body;

    
    const userExistsQuery = 'SELECT * FROM public.usuario WHERE email = $1';
    const userExistsResult = await pool.query(userExistsQuery, [email]);

    if (userExistsResult.rows.length > 0) {
      return res.status(400).json({ message: 'Usuário já cadastrado' });
    }

    
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(senha, saltRounds);

    // Inserir usuário
    const insertUserQuery =
      'INSERT INTO public.usuario (cpf, nome, telefone, email, senha) VALUES ($1, $2, $3, $4, $5)';
    await pool.query(insertUserQuery, [cpf, nome, telefone, email, hashedPassword]);

    res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
});


app.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

   
    const getUserQuery = 'SELECT * FROM public.usuario WHERE email = $1';
    const getUserResult = await pool.query(getUserQuery, [email]);

    if (getUserResult.rows.length === 0) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    const user = getUserResult.rows[0];

    
    const passwordMatch = await bcrypt.compare(senha, user.senha);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    res.status(200).json({ message: 'Login bem-sucedido' });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
