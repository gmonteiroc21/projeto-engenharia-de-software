document.getElementById('address-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const addressId = parseInt(document.getElementById('addressId').value);
  
    // Enviar o ID do endereço para o servidor Node.js
    fetch(`/getAddress?id=${addressId}`)
      .then(response => response.json())
      .then(data => {
        window.location.href = `/map.html`;
      })
      .catch(error => {
        console.error('Erro ao buscar o endereço:', error);
      });
  });
  