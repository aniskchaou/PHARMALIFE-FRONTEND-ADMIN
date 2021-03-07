
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export default class MedicamentValidation {
    formGroup: FormGroup;

    public get formGroupInstance(): FormGroup {
        return this.formGroup;
    }

    constructor() {
        this.formGroup = this.createFormGroup()
    }

    public checkValidation() {

        if (this.formGroup.invalid) {
            return false;
        }
        return true;
    }
    createFormGroup() {
        return new FormGroup({

            product_name: new FormControl('', Validators.required),
            generic_name: new FormControl('', Validators.required),
            box_size: new FormControl('', Validators.required),
            //unit: new FormControl('', Validators.required),
            product_location: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            //type_name: new FormControl('', Validators.required),
            // category_id: new FormControl('', Validators.required),
            price: new FormControl('', Validators.required),
            tax: new FormControl('', Validators.required),
            // manufacturer_id: new FormControl('', Validators.required),
            manufacturer_price: new FormControl('', Validators.required),

        })
    }
}
