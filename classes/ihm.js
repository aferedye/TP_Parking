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

    demarrer() {
        this.formulaire.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.querySelector("input[name='immatriculation']").value
            const exist = this.verificationVehicule(input);

        this.ajoutVehicule(exist);
        })
    }

    ajoutVehicule(exist) {

        if(exist == true) {
            return message.textContent = "Le véhicule existe déjà"
        } 
        else if (exist == false){
            const heureDepot = new Date();
            const message = document.querySelector('#message')
            const vehicule = new Vehicule(immatriculation, heureDepot)
            this.vehicule.push(vehicule)
            console.log(this.vehicule)
            return message.textContent = "Véhicule enregistré"
            
        }
    }


    

    verificationVehicule(immatriculationInput) {

        for (const i of this.vehicule) {
            if (i.immatriculation === immatriculationInput) {
                return true;
            }
        }
            return false;
        }
    
    retraitVehicule() {
        this.retourVehicule.addEventListener('click', (e) => {
            e.preventDefault();


        })
    }
}

