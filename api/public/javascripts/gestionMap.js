function initialize() {
    var map = L.map('map', { tap: false }).setView([48.660509, 6.155727], 16);

    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    if (map.tap) map.tap.disable();

    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
    });

    const fleur = L.icon({
        iconUrl: '/images/fleur.png',
        iconSize: [24, 24],
    });

    const ruche = L.icon({
        iconUrl: '/images/ruche.png',
        iconSize: [24, 24],
    });

    L.marker([48.661669, 6.156137], { icon: fleur }).addTo(map).bindPopup(
        'Rose'
    );

    L.marker([48.660436, 6.153093], { icon: fleur }).addTo(map).bindPopup(
        'Tulipe'
    );

    L.marker([48.658593, 6.156025], { icon: fleur }).addTo(map).bindPopup(
        'Cactus'
    );

    L.marker([48.662841, 6.157025], { icon: fleur }).addTo(map).bindPopup(
        'Buisson'
    );

    L.marker([48.660293, 6.158694], { icon: fleur }).addTo(map).bindPopup(
        'Arbre'
    );

    L.marker([48.660676, 6.155261], { icon: ruche }).addTo(map).bindPopup(
        'Ruche'
    );

    map.addLayer(osmLayer);
}

document.body.onload = function () {
    initialize()
}