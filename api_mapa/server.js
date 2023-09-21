const express = require('express');
const fs = require('fs');
const transformToGeoloc = require('./public/transformToGeoloc');
const pool = require('./config/db');
const app = express();
const port = process.env.PORT || 5000;

// Middleware para processar solicitações JSON
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/form.html');
});

app.get('/map.html', (req, res) => {
  res.sendFile(__dirname + '/public/map.html');
});

app.get('/form.js', (req, res) => {
  res.sendFile(__dirname + '/public/form.js');
});

app.get('/map.js', (req, res) => {
  res.sendFile(__dirname + '/public/map.js');
});

app.get('/getAddress', async (req, res) => { // Use async para tornar o código mais legível
  const addressId = req.query.id;

  try {
    // Use o pool para obter uma conexão
    const client = await pool.connect();

    const result = await client.query('SELECT endereco FROM ponto_de_coleta WHERE coletor_id = $1', [addressId]);

    const enderecos = result.rows.map((row) => row.endereco);

    // Troque enderecos por geoloc usando a função transformToGeoloc
    const geoloc = [];

    for (const endereco of enderecos) {
      try {
        const end = await transformToGeoloc(endereco);
        geoloc.push(end);
      } catch (error) {
        console.error('Erro ao obter geolocalização:', error);
      }
    }

    client.release(); // Libere o cliente de volta para o pool

    if (geoloc.length >= 1) {
      const filePath = './public/geoloc.json'; // Caminho para a pasta "public"
      
      // Escreva a matriz de objetos JSON no arquivo dentro da pasta "public"
      fs.writeFile(filePath, JSON.stringify(geoloc), (err) => {
        if (err) {
          console.error('Erro ao escrever o arquivo JSON:', err);
          res.status(500).json({ error: 'Erro ao buscar o endereço.' });
        } else {
          res.json(geoloc);
        }
      });
    } else {
      res.status(404).json({ error: 'Endereço não encontrado.' });
    }
  } catch (err) {
    console.error('Erro na consulta ao banco de dados:', err);
    res.status(500).json({ error: 'Erro ao buscar o endereço.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
