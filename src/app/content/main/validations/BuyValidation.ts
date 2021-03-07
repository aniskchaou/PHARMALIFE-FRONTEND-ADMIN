
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export default class BuyValidation {
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

            manufacturer_id: new FormControl('', Validators.required),
            purchase_date: new FormControl(),
            chalan_no: new FormControl('', Validators.required),
            purchase_details: new FormControl('', Validators.required),
            paytype: new FormControl('', Validators.required),
            bank_id: new FormControl('', Validators.required),

        })
    }
}
