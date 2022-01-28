let lat
let lon

function initialize(x,y) {
    let map = L.map('map', { tap: false }).setView([48.660509, 6.155727], 15.5);

    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
    });

    const ruche = L.icon({
        iconUrl: '/images/ruche.png',
        iconSize: [24, 24],
    });

    const fleur = L.icon({
        iconUrl: '/images/fleur.png',
        iconSize: [24, 24],
    });

    const goldIcon = new L.Icon({
        iconUrl: '../images/marker-icon-2x-gold.png',
        shadowUrl: '../images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    L.marker([x, y], {icon:goldIcon}).addTo(map).bindPopup(
        'You are here !'
    );

    L.marker([48.660676, 6.155261], { icon: ruche }).addTo(map).bindPopup(
      'Ruche'
    );

    fetch('http://localhost:3000/plants/listPlants', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then((results) => {
            for (let i = 0; i < results.length; i++) {
                L.marker([results[i].lat, results[i].lon], { icon: fleur }).addTo(map).bindPopup(
                    `
                    <strong>${results[i].nom}</strong>
                    <br/>
                    <img src="${results[i].image}" alt="logo" width="50" height="50" class="border rounded">
                    `
                );
            }
        })
        .catch(err => console.log(err))

    map.addLayer(osmLayer);
}

function btnReload() {
    document.getElementById('btnReload').addEventListener('click', (evt) => {
        evt.preventDefault();
        window.location.reload();
    });
}

window.onload = () => {

    btnReload();

    fetch(`http://ip-api.com/json/?fields=61439`)
    .then(response => response.json())
    .then((results) => {
        lat = results.lat
        lon = results.lon

        initialize(lat, lon)
    })
    .catch(err => console.log(err));
}