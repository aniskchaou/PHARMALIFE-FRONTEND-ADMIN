import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class ConstructorTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _constructor = []
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
        this._constructor.splice(id, 1);
    };


}