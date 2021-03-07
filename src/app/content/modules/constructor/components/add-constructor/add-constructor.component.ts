import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import ConstructorMessage from 'src/app/content/main/messages/ConstructorMessage';
import ConstructorTestService from 'src/app/content/main/mocks/ConstructorTestService';
import ConstructorValidation from 'src/app/content/main/validations/ConstructorValidation';

@Component({
  selector: 'app-add-constructor',
  templateUrl: './add-constructor.component.html',
  styleUrls: ['./add-constructor.component.css']
})
export class AddConstructorComponent extends URLLoader implements OnInit {

  constructorForm: FormGroup
  msg: ConstructorMessage
  submitted = false


  get f() { return this.constructorForm.controls; }

  constructor(private validation: ConstructorValidation,
    private message: ConstructorMessage,
    private constructorTestService: ConstructorTestService) {
    super()
    this.constructorForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.constructorForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.constructorTestService.create(this.constructorForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }



  }

}
