

export default class Client {
    id: number
    customer_name: string
    email: string
    mobile: string
    phone: string
    city: string
    zip: string
    country: string


    constructor(
        id: number,
        customer_name: string,
        email: string,
        mobile: string,
        phone: string,
        city: string,
        zip: string,
        country: string
    ) {
        this.id = id
        this.customer_name = customer_name
        this.email = email
        this.mobile = mobile
        this.phone = phone
        this.city = city
        this.zip = zip
        this.country = country
    }





}