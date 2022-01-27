let myMap;

let goldIcon = new L.Icon({
    iconUrl: 'marker-icon-2x-gold.png',
    shadowUrl: 'marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

let redIcon = new L.Icon({
    iconUrl: 'marker-icon-2x-red.png',
    shadowUrl: 'marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


function allow(position)
{
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    
    console.log(lat + ", " + lon);
    
    L.marker([lat, lon],{icon:goldIcon}).bindPopup('<b> Vous êtes ici ! </b>').addTo(myMap);
}

function reject(error)
{
     let message = "";
     switch(error.code)
     {
         case 1:
            message = "Permission refusée";
            break;
         case 2:
             message = "Position non disponibe";
             break;
         case 3:
             message = "Dépassement de délai";
             break;
         case 4:
             message = "Erreur inconnue";
             break;
     }
     console.log(message);
}

function initMap()
{
    myMap = L.map('map').setView([48.68, 6.18], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            minZoom: 11,
            maxZoom: 20
    }).addTo(myMap);
}

function geolocalisation(event)
{
    navigator.geolocation.getCurrentPosition(allow, reject);
}

let geo = document.getElementById('geolocation');

geo.addEventListener('click', function(){
    geolocalisation();
});

initMap();