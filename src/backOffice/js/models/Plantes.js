export class Plantes {
    constructor(nomLatin, nomFrançais, hauteur, nectar, pollen, miellat, floraison, couleur, emplacementsJardin, qrCode, active, photos) {

        this.nomLatin = nomLatin;
        this.nomFrançais = nomFrançais;
        this.hauteur = hauteur;
        this.nectar = nectar;
        this.pollen = pollen;
        this.miellat = miellat;
        this.floraison = floraison;
        this.couleur = couleur;
        this.localisation = emplacementsJardin;
        this.qrCode = qrCode;
        this.active = active
        this.photos = photos;
    }
    lineDisplay() {
        let tr = document.createElement("tr");
        let checked = this.miellat === 1 ?  "checked" : ""; 
        tr.innerHTML = `
        <th scope="row">${this.nomLatin}</th>
        <td>${this.nomFrançais}</td>
        <td>${this.hauteur}</td>
        <td>${this.nectar}</td>
        <td>${this.pollen}</td>
        <td>
            <div class="form-check form-switch text-center">
                <input class="form-check-input text-center" type="checkbox" role="switch"
                    id="flexSwitchCheckChecked" ${checked}>
            </div>
        </td>
        <td>${this.floraison}</td>
        <td>${this.couleur}</td>
        <td>${this.localisation}</td>
        <td><img src="${this.photos}" class="img-thumbnail" alt=""></td>
        <td>
            <button name="qrButton" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                data-bs-target="#qrModal">${this.qrCode}</button>
        </td>
        <td class="text-center">
            <div class="form-check form-switch text-center">
                <input class="form-check-input text-center" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
            </div>
        </td>
        <td class="text-center">
            <img class="me-2" src="../../../assets/icone/trash-solid-red.svg" height=20 width=20 />
        </td>`
        let bt = tr.getAttributeNode("qrButton");
        //console.log("qr btn is :", bt);
        return tr;
    }

    async enregistrerPlante() {
        //fetch
        let url = `http://localhost:8080/plantes/createUpdate?nom_latin=${this.nomLatin}&nom_fr=${this.nomFrançais}&hauteur=${this.hauteur}&nectar=${this.nectar}&pollen=${this.pollen}&miellat=${this.miellat}&floraison=${this.floraison}&couleur=${this.couleur}&photo=${this.photos}&localisation=${this.localisation}`;

        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        } catch (err) {
            alert(err); // Failed to fetch
        }
    }

    static async getAll() {
        let url = `http://localhost:8080/plantes/all`;
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        let response;
        //fetch("URL", { method: "POST"});
        /*
        try {
            response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        } catch(err) {
            alert(err); // Failed to fetch
        }
        response.then(data => {
            console.log("cc");
        })
        */

        fetch(url, { options })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.forEach(p => {
                    let plante = new Plantes(p.nom_latin, p.nom_fr, p.hauteur, p.nectar, p.pollen,
                        p.miellat, p.floraison, p.couleur, p.localisation, null, true, p.photo);
                    document.getElementById('plantList').appendChild(plante.lineDisplay())
                });
            })
            .catch(err => {
                // Catch and display errors
            })

    }

}