import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class SupplierTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _supplier = [{
        "id": 1,
        "supplier_name": "Eugène Boileau",
        "mobile": "05.41.65.19.71",
        "address": "rue Pierre De Coubertin 31100 TOULOUSE",
        "details": "string",
        "previous_balance": "12"
    }]



    static id = 0

    public getAll() {
        return this._supplier;
    }

    public get(id) {
        return this._supplier.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = SupplierTestService.id
        this._supplier.push(data);
        SupplierTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._supplier.findIndex(item => item.id === parseInt(data.id));
        this._supplier[foundIndex] = data;
    };

    public remove(id) {
        var supplier = this.get(id)
        this._supplier.splice(this._supplier.indexOf(supplier), 1);
    };


}