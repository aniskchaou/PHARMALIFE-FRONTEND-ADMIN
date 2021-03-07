import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class MedicamentTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _medicament = []
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
        this._medicament.splice(id, 1);
    };


}