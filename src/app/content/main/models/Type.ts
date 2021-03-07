

export default class Type {
    id: number
    type_name: string
    product_id: string
    purchase_date: string
    purchase_invoiceNo: string
    purchase_status: string


    constructor(
        id: number,
        type_name: string,
        product_id: string,
        purchase_date: string,
        purchase_invoiceNo: string,
        purchase_status: string
    ) {
        this.id = id
        this.type_name = type_name
        this.product_id = product_id
        this.purchase_date = purchase_date
        this.purchase_invoiceNo = purchase_invoiceNo
        this.purchase_status = purchase_status
    }



}