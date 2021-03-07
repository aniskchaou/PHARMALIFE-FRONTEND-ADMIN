

export default class Medicament {
    id: number
    product_name: string
    generic_name: string
    box_size: string
    unit: string
    product_location: string
    description: string
    type_name: string
    category_id: string
    price: string
    tax: string
    manufacturer_id: string
    manufacturer_price: string

    constructor(
        id: number,
        product_name: string,
        generic_name: string,
        box_size: string,
        unit: string,
        product_location: string,
        description: string,
        type_name: string,
        category_id: string,
        price: string,
        tax: string,
        manufacturer_id: string,
        manufacturer_price: string
    ) {
        this.id = id
        this.product_name = product_name
        this.generic_name = generic_name
        this.box_size = box_size
        this.unit = unit
        this.product_location = product_location
        this.description = description
        this.type_name = type_name
        this.category_id = category_id
        this.price = price
        this.tax = tax
        this.manufacturer_id = manufacturer_id
        this.manufacturer_price = manufacturer_price
    }






}