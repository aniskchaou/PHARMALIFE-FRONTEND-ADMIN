import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class CategoryMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Categorie a été ajouté avec succés',
        'edit': 'Categorie a été modifié avec succés',
        'delete': 'Categorie a été supprimé avec succés'
    }
    validationMessage = {
        'category_name': 'Category est obligatoire',
    }

    constructor() {

    }
}