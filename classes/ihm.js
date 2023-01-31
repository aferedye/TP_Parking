import { Vehicule } from "./vehicule.js";

export class Ihm {
    constructor(formulaire, retourVehicule) {
        this.vehicule = [
            {
                immatriculation : "bf-554-cd",
                heureDepot : new Date()
            },
            {
                immatriculation : "te-666-te",
                heureDepot : new Date()
            }
        ]
        this.formulaire = formulaire
        this.retourVehicule = retourVehicule
    }

    demarrer() {
        const message = document.querySelector('#message')
        this.formulaire.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.querySelector("input[name='immatriculation']").value
            let exist = this.verificationVehicule(input);

            this.ajoutVehicule(exist, input, message);
            exist = this.verificationVehicule(input);
            this.retraitVehicule(exist, input, message);

        setTimeout(() => {
            message.textContent = ""
        },3000)
        })
        

        
    }

    ajoutVehicule(exist, input, message) {

        if(exist == true) {
            return message.textContent = "Le véhicule existe déjà"
        } 
        else if (exist == false){
            const heureDepot = new Date();
            const vehicule = new Vehicule(input, heureDepot)
            this.vehicule.push(vehicule)
            message.textContent = "Véhicule enregistré"
            console.log(this.vehicule)
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
    
    retraitVehicule(exist, input, message) {
        this.retourVehicule.addEventListener('click', (e) => {
            console.log("fonctionne", exist)
            e.preventDefault();
            let outTime = new Date()
            if (exist == true) {
                console.log("existe")
                for (const i of this.vehicule) {
                    console.log(((outTime-i.heureDepot)/1000))
                    if (i.heureDepot <= ((outTime-i.heureDepot)/1000)) {
                        console.log("OK")

                    }
                }
            }

        })
    }
}

