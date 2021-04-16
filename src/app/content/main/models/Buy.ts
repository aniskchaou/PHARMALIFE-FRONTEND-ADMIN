

export default class Buy {
    id: number
    manufacturer_id: string
    purchase_date: string
    chalan_no: string
    purchase_details: string
    paytype: string
    bank_id: string


    constructor(
        id: number,
        manufacturer_id: string,
        purchase_date: string,
        chalan_no: string,
        purchase_details: string,
        paytype: string,
        bank_id: string
    ) {
        this.id = id
        this.manufacturer_id = manufacturer_id
        this.purchase_date = purchase_date
        this.chalan_no = chalan_no
        this.purchase_details = purchase_details
        this.paytype = paytype
        this.bank_id = bank_id
    }







}