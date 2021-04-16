import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class ClientTestService implements Service {

    public ID = new BehaviorSubject<string>(null);
    _client = [{
        "id": 1,
        "customer_name": "Leverett C Lebel",
        "email": "8ogxgpulbfw@temporary-mail.net",
        "mobile": "06 34 24 55 23",
        "phone": "03 44 53 56 66",
        "city": "Paris",
        "zip": "75000",
        "country": "France"
    }]
    static id = 0

    public getAll() {
        return this._client;
    }

    public get(id) {
        return this._client.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = ClientTestService.id
        this._client.push(data);
        ClientTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._client.findIndex(item => item.id === parseInt(data.id));
        this._client[foundIndex] = data;
    };

    public remove(id) {
        var client = this.get(id)
        this._client.splice(this._client.indexOf(client), 1);
    };


}