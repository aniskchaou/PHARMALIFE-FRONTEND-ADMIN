import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class ConstructorTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _constructor = [{
        "id": 1,
        "manufacturer_name": "Sanofi Pasteur",
        "mobile": "36, place Stanislas 92000 NANTERRE ",
        "phone": "01.17.19.94.43",
        "fax": "01.17.19.94.43",
        "city": "Paris",
        "state": "Ile de France",
        "country": "France",
        "email": "GemmaLagueux@dayrep.com",
        "zip": "92000",
        "previous_balance": "977Y87Y",
        "address": ""
    }]


    static id = 0

    public getAll() {
        return this._constructor;
    }

    public get(id) {
        return this._constructor.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = ConstructorTestService.id
        this._constructor.push(data);
        ConstructorTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._constructor.findIndex(item => item.id === parseInt(data.id));
        this._constructor[foundIndex] = data;
    };

    public remove(id) {
        var constructor = this.get(id)
        this._constructor.splice(this._constructor.indexOf(constructor), 1);
    };


}