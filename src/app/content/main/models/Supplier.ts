

export default class Supplier {
    id: number
    supplier_name: string
    mobile: string
    address: string
    details: string
    previous_balance: string



    constructor(
        id: number,
        supplier_name: string,
        mobile: string,
        address: string,
        details: string,
        previous_balance: string
    ) {
        this.id = id
        this.supplier_name = supplier_name
        this.mobile = mobile
        this.address = address
        this.details = details
        this.previous_balance = previous_balance
    }




}