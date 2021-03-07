
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export default class SupplierValidation {
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

            supplier_name: new FormControl('', Validators.required),
            mobile: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
            details: new FormControl('', Validators.required),
            previous_balance: new FormControl('', Validators.required),
        })
    }
}
