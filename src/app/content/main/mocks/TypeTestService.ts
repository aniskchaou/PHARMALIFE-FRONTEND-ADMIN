import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class TypeTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _type = []
    static id = 0

    public getAll() {
        return this._type;
    }

    public get(id) {
        return this._type.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = TypeTestService.id
        this._type.push(data);
        TypeTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._type.findIndex(item => item.id === parseInt(data.id));
        this._type[foundIndex] = data;
    };

    public remove(id) {
        this._type.splice(id, 1);
    };


}