import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class MedicamentTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _medicament = [{
        "id": 1,
        "product_name": "Nurofen",
        "generic_name": "IBUPROFENE",
        "box_size": "string",
        "unit": "string",
        "product_location": "string",
        "description": "string",
        "type_name": "Analgésiques et Anti-inflammatoires",
        "category_id": "string",
        "price": "13",
        "tax": "string",
        "manufacturer_id": "Sanofi Pasteur",
        "manufacturer_price": "string"
    }]



    static id = 0

    public getAll() {
        return this._medicament;
    }

    public get(id) {
        return this._medicament.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = MedicamentTestService.id
        this._medicament.push(data);
        MedicamentTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._medicament.findIndex(item => item.id === parseInt(data.id));
        this._medicament[foundIndex] = data;
    };

    public remove(id) {
        var medicament = this.get(id)
        this._medicament.splice(this._medicament.indexOf(medicament), 1);
    };


}