let map;
const jsonFileName = 'geoloc.json'
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: new google.maps.LatLng(-8.05428, -34.8813),
    mapTypeId: "terrain",
  });


  // Carrega os dados do arquivo JSON
  fetch(jsonFileName)
    .then(response => response.json())
    .then(locations => {

      for (let i = 0; i < locations.length; i++) {
        const location = locations[i];
        const latLng = new google.maps.LatLng(location.latitude, location.longitude);

        new google.maps.Marker({
          position: latLng,
          map: map,
        });
      }
    })
    .catch(error => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
}