import { Vehicule } from "./vehicule.js";

export class Ihm {
    constructor(formulaire, retourVehicule) {
        this.vehicule = [
            {
                immatriculation : "bf-554-cd"
            },
            {
                immatriculation : "te-666-te"
            }
        ]
        this.formulaire = formulaire
        this.retourVehicule = retourVehicule
    }

    ajoutVehicule() {
        this.formulaire.addEventListener('submit', (e) => {
            const immatriculation = document.querySelector("input[name='immatriculation']").value
            let exist = false;
            e.preventDefault();
            this.verificationVehicule(immatriculation, exist);

            console.log(exist)
            if(exist == true) {
                return message.textContent = "Le véhicule existe déjà"
            } 
            else if (this.exist == false){
            const heureDepot = new Date();
            const message = document.querySelector('#message')
            const vehicule = new Vehicule(immatriculation, heureDepot)
            this.vehicule.push(vehicule)

            message.textContent = "Véhicule enregistré"

            setTimeout(() => {
                message.textContent = ""
            },5000)

            console.log(this.vehicule)
    }})
    }

    retraitVehicule() {
        this.retourVehicule.addEventListener('click', (e) => {
            e.preventDefault();
        })
    }

    verificationVehicule(immatriculationInput, exist) {

            this.vehicule.forEach(i => {
                if(i.immatriculation == immatriculationInput) {
                    return exist = true
                } else if (i.immatriculation != immatriculationInput) {
                    return exist = false
                }
            });
    }
}
