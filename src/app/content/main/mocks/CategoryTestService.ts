import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class CategoryTestService implements Service {

    public ID = new BehaviorSubject<string>(null);
    _categorie = []
    static id = 0

    public getAll() {
        return this._categorie;
    }

    public get(id) {
        return this._categorie.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = CategoryTestService.id
        this._categorie.push(data);
        CategoryTestService.id++
    };

    public update(data) {

        var foundIndex = this._categorie.findIndex(item => item.id === parseInt(data.id));
        this._categorie[foundIndex] = data;
    };

    public remove(id) {
        this._categorie.splice(id, 1);
    };


}