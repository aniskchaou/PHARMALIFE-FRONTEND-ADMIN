import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class SupplierMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Fournisseur a été ajouté avec succés',
        'edit': 'Fournisseur a été modifié avec succés',
        'delete': 'Fournisseur a été supprimé avec succés'
    }
    validationMessage = {
        'supplier_name': 'Nom fournisseur est obligatoire',
        'mobile': 'Téléphone est obligatoire',
        'address': 'Adresse est obligatoire',
        'details': 'Details est obligatoire',
        'previous_balance': ' est obligatoire',
    }

    constructor() {

    }
}