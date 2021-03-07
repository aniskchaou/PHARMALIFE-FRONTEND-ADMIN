import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ServiceMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Service a été ajouté avec succés',
        'edit': 'Service a été modifié avec succés',
        'delete': 'Service a été supprimé avec succés'
    }
    validationMessage = {
        'service_name': 'Nom de service est obligatoire',
        'charge': 'Charge est obligatoire',
        'description': 'Description est obligatoire',
        'tax': 'Tax est obligatoire',
    }

    constructor() {

    }
}