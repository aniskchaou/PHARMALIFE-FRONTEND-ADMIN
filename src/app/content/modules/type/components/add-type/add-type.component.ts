import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import TypeMessage from 'src/app/content/main/messages/TypeMessage';
import TypeTestService from 'src/app/content/main/mocks/TypeTestService';
import TypeValidation from 'src/app/content/main/validations/TypeValidation';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent extends URLLoader implements OnInit {

  typeForm: FormGroup
  msg: TypeMessage
  submitted = false


  get f() { return this.typeForm.controls; }

  constructor(private validation: TypeValidation,
    private message: TypeMessage,
    private typeTestType: TypeTestService) {
    super()
    this.typeForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.typeForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.typeTestType.create(this.typeForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }
  }


}
