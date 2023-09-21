
// Importe a biblioteca 'axios' para fazer a solicitação HTTP (você pode instalá-la com npm ou yarn).
const axios = require('axios');
const config = require('../config/config');
async function obterGeolocalizacao(endereco) {
  try {
    // Formate a URL da solicitação com o endereço e a chave de API.
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(endereco)}&key=${config.GOOGLE_MAPS_API_KEY}`;

    // Faça a solicitação HTTP para a API de Geocodificação do Google Maps.
    const response = await axios.get(apiUrl);

    // Verifique se a resposta foi bem-sucedida e se há resultados.
    if (response.status === 200 && response.data.status === 'OK') {
      // Extraia as informações de geolocalização da resposta.
      const result = response.data.results[0];
      const geometry = result.geometry.location;
      // Retorne as coordenadas de latitude e longitude.
      return {
        latitude: geometry.lat,
        longitude: geometry.lng
      };
    } else {
      throw new Error('Falha ao obter a geolocalização do endereço.');
    }
  } catch (error) {
    throw error;
  }
}


module.exports = obterGeolocalizacao;

