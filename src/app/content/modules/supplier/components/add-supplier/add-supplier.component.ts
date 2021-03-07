import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import SupplierMessage from 'src/app/content/main/messages/SupplierMessage';
import SupplierTestService from 'src/app/content/main/mocks/SupplierTestService';
import SupplierValidation from 'src/app/content/main/validations/SupplierValidation';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent extends URLLoader implements OnInit {

  supplierForm: FormGroup
  msg: SupplierMessage
  submitted = false


  get f() { return this.supplierForm.controls; }

  constructor(private validation: SupplierValidation,
    private message: SupplierMessage,
    private supplierTestService: SupplierTestService) {
    super()
    this.supplierForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.supplierForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.supplierTestService.create(this.supplierForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }
  }

}
