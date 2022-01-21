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
    
    tr.innerHTML= `<td>b</td>
        <td scope="row">${this.nomLatin}</td>
        <td>${this.nomFrançais}</td>
        <td>${this.hauteur}</td>
        <td>${this.nectar}</td>
        <td>${this.pollen}</td>
        <td>${this.miellat}</td>
        <td>${this.floraison}</td>
        <td>${this.couleur}</td>
        <td><a class="blue" onclick="showQR('abc123')">abc123</a></td>
        <td class="text-center">
            <div class="form-check form-switch text-center">
                <input class="form-check-input text-center" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
            </div>
        </td>
        <td class="text-center">
            <img class="me-2" src="../../../assets/icone/trash-solid-red.svg" height=20 width=20 />
        </td>`
    return tr;
}
}