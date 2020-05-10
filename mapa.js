var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -25.32, lng: 27.10},
    zoom: 8
  });
}