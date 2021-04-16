
export default class Constructor {
    id: number
    manufacturer_name: string
    mobile: string
    phone: string
    fax: string
    city: string
    state: string
    country: string
    email: string
    zip: string
    previous_balance: string
    address: string


    constructor(
        id: number,
        manufacturer_name: string,
        mobile: string,
        phone: string,
        fax: string,
        city: string,
        state: string,
        country: string,
        email: string,
        zip: string,
        previous_balance: string,
        address: string
    ) {
        this.id = id
        this.manufacturer_name = manufacturer_name
        this.mobile = mobile
        this.phone = phone
        this.fax = fax
        this.city = city
        this.state = state
        this.country = country
        this.email = email
        this.zip = zip
        this.previous_balance = previous_balance
        this.address = address
    }




}