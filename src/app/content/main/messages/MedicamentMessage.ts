import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class MedicamentMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Medicament a été ajouté avec succés',
        'edit': 'Medicament a été modifié avec succés',
        'delete': 'Medicament a été supprimé avec succés'
    }
    validationMessage = {
        'product_name': 'Nom produit est obligatoire',
        'generic_name': 'Nom générique est obligatoire',
        'box_size': 'Taille de la boite est obligatoire',
        'unit': 'Unité est obligatoire',
        'product_location': ' est obligatoire',
        'description': 'Description est obligatoire',
        'type_name': 'Type est obligatoire',
        'category_id': ' est obligatoire',
        'price': 'Prix est obligatoire',
        'tax': 'Tax est obligatoire',
        'manufacturer_id': 'Constructeur est obligatoire',
        'manufacturer_price': 'Prix Constructeur est obligatoire',
    }

    constructor() {

    }
}