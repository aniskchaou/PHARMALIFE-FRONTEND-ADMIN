import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ConstructorMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Constructeur a été ajouté avec succés',
        'edit': 'Constructeur a été modifié avec succés',
        'delete': 'Constructeur a été supprimé avec succés'
    }
    validationMessage = {
        'manufacturer_name': 'Nom de constructeur est obligatoire',
        'mobile': 'Mobile est obligatoire',
        'phone': 'Téléphone est obligatoire',
        'fax': 'Fax est obligatoire',
        'city': 'Ville est obligatoire',
        'state': ' est obligatoire',
        'country': 'Pays est obligatoire',
    }

    constructor() {

    }
}