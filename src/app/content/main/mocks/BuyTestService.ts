import { Injectable } from "@angular/core";
import Service from "../interfaces/Service";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export default class BuyTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _buy = [{
        "id": 1,
        "manufacturer_id": "string",
        "purchase_date": "string",
        "chalan_no": "string",
        "purchase_details": "string",
        "paytype": "string",
        "bank_id": "string"
    }]
    static id = 0

    public getAll() {
        return this._buy;
    }

    public get(id) {
        return this._buy.find(item => item.id === parseInt(id));
    };

    public create(data) {
        BuyTestService.id++
        data["id"] = BuyTestService.id
        this._buy.push(data);
    };

    public update(data) {

        var foundIndex = this._buy.findIndex(item => item.id === data.id);
        this._buy[foundIndex] = data;
    };

    public remove(id) {

        var buy = this.get(id)
        this._buy.splice(this._buy.indexOf(buy), 1);
    };


}