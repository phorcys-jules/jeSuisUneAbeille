
function afficherListe(data) {
    for (let i = 0; i < data.length; i++) {
        document.getElementById('plantes').innerHTML += `
        <div>
            <h1>${data[i].nom_fr}</h1>
            <p><strong>Description :</strong> ${data[i].description}</p>
        <div>
        <div class="d-flex justify-content-center">
            <img class="border rounded" src="${data[i].photo}" alt="imgPlante" width="100" height="100">
        </div>
        <hr />
    `
    };
}

window.onload = () => {

    fetch('http://localhost:3000/plants/listPlants', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then((results) => {
            afficherListe(results)
        })
        .catch(err => console.log(err))
}