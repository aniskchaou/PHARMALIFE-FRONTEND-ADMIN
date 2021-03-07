

export default class Service {
    id: number
    service_name: string
    charge: string
    description: string
    tax: string


    constructor(
        id: number,
        service_name: string,
        charge: string,
        description: string,
        tax: string
    ) {
        this.id = id
        this.service_name = service_name
        this.charge = charge
        this.description = description
        this.tax = tax
    }





}