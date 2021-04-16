import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class ServiceTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _service = [{
        "id": 1,
        "service_name": "traitement et suivi des patients",
        "charge": "49.26",
        "description": "string",
        "tax": "20"
    }, {
        "id": 2,
        "service_name": "dépistage",
        "charge": "34.44",
        "description": "string",
        "tax": "16"
    }]



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
        var service = this.get(id)
        this._service.splice(this._service.indexOf(service), 1);
    };


}