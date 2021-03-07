import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class ServiceTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _service = []
    static id = 0

    public getAll() {
        return this._service;
    }

    public get(id) {
        return this._service.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = ServiceTestService.id
        this._service.push(data);
        ServiceTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._service.findIndex(item => item.id === parseInt(data.id));
        this._service[foundIndex] = data;
    };

    public remove(id) {
        this._service.splice(id, 1);
    };


}