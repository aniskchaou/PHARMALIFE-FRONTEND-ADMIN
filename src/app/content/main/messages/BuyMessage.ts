import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class BuyMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Achat a été ajouté avec succés',
        'edit': 'Achat a été modifié avec succés',
        'delete': 'Achat a été supprimé avec succés'
    }
    validationMessage = {
        'manufacturer_id': 'Constructeur est obligatoire',
        'purchase_date': 'Date dachat est obligatoire',
        'chalan_no': ' est obligatoire',
        'purchase_details': 'Details achat est obligatoire',
        'paytype': 'Type de paiement est obligatoire',
        'bank_id': 'Banque est obligatoire',
    }

    constructor() {

    }
}