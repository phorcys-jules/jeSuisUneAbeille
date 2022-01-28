import { Plantes } from "./models/Plantes.js";

const btnAddPlant = document.getElementById('addPlant');

btnAddPlant.addEventListener("click", function(e){
    e.preventDefault();
    let nomLat = document.forms["addForm"]["latin"].value;
    let nomFr = document.forms["addForm"]["Français"].value;
    let haut = document.forms["addForm"]["Hauteur"].value;
    let nect = document.forms["addForm"]["Nectar"].value;
    let poll = document.forms["addForm"]["Pollen"].value;
    let miel = document.forms["addForm"]["Miellat"].value;
    let flor = document.forms["addForm"]["Floraison"].value;
    let coul = document.forms["addForm"]["Couleur"].value;
    let empla = document.forms["addForm"]["Emplacement"].value;
    let photos = document.forms["addForm"]["Photos"].value;
    /** TODO validation des champs :
     * non vide
     * pour les liste : impossible de choisir "Selectionner"
     * Photos est bien une url de photos valide (preview ?)
     * ...
    */
     
    //(nomLatin, nomFrançais, hauteur, nectar, pollen, miellat , floraison, couleur, emplacementsJardin,qrCode, active, photos)
    let p1 = new Plantes(nomLat, nomFr, haut, nect, poll, miel, flor, coul, empla, null, true, photos);
    p1.enregistrerPlante();
    //console.log('todo ', nomLat, nomFr, haut, nect, poll, miel, flor, coul, empla, photos);
});


export function showQR(codeNumber){
    console.log(codeNumber);
}

export function edit(btn) {
    btn.classList.toggle("btn-success");
    if (btn.id =="editBtn") {
        btn.innerHTML = 'save';
        btn.id = 'save';
    } else {
        btn.innerHTML = 'edit';
        btn.id = 'editBtn';
    }
    console.log('coucou');

}
/*
export function save(btn) {
    console.log('switch to save mode',btn);
    btn.innerHTML = 'edit';
    btn.id = 'edit';
    btn.classList.toggle("btn-success");
    btn.onclick=null;
    btn.removeEventListener("click", function(e) { e.preventDefault(); }, false);
    btn.addEventListener("click", function(){
        edit(btn);
    });
    //e.onclick= edit(e);
}*/

//une fois page chargé, ajouter less élèments 
document.addEventListener("DOMContentLoaded", function(){
    let plantes = Plantes.getAll();
});