import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ClientMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Client a été ajouté avec succés',
        'edit': 'Client a été modifié avec succés',
        'delete': 'Client a été supprimé avec succés'
    }
    validationMessage = {
        'customer_name': 'Client est obligatoire',
        'email': 'Email est obligatoire',
        'mobile': 'Mobile est obligatoire',
        'phone': 'Téléphone est obligatoire',
        'city': 'Ville est obligatoire',
        'zip': 'Code postale est obligatoire',
        'country': 'Pays est obligatoire',
    }

    constructor() {

    }
}