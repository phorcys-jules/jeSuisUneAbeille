import config from './config.js';

export class Produit {
    constructor(nomLatin, nomFrançais, hauteur, nectar, pollen, miellat , floraison, couleur, emplacementsJardin,qrCode, active, photos) {

        this.nomLatin=nomLatin;
        this.nomFrançais=nomFrançais;
        this.hauteur=hauteur;
        this.nectar=nectar;
        this.pollen=pollen;
        this.miellat=miellat ;
        this.floraison=floraison;
        this.couleur=couleur;
        this.emplacement=emplacementsJardin;
        this.qrCode=qrCode;
        this.active=active
        this.photos=photos;
    }
    toProduct() {
    let tr = document.createElement("tr");
    
    tr.innerHTML= `
        <th scope="row">${this.nom}</th>
        <td>${this.description}</td>
        <td>${this.prix}€</td>
        <td>${this.tailleLot}</td>
        <td>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
            <img class="me-2" src="../assets/icone/trash-solid-red.svg" height=20 width=20 />
        </div>
        </td>`
    return tr;
}