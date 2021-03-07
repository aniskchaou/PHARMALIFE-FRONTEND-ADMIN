import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class TypeMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Type Medicament a été ajouté avec succés',
        'edit': 'Type Medicament a été modifié avec succés',
        'delete': 'Type Medicament a été supprimé avec succés'
    }
    validationMessage = {
        'type_name': 'Type est obligatoire',
        'product_id': 'produit est obligatoire',
        'purchase_date': 'Date achat est obligatoire',
        'purchase_invoiceNo': 'No facture est obligatoire',
        'purchase_status': 'Etat achat est obligatoire',
    }

    constructor() {

    }
}