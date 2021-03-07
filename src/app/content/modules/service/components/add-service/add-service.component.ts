import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import ServiceMessage from 'src/app/content/main/messages/ServiceMessage';
import ServiceTestService from 'src/app/content/main/mocks/ServiceTestService';
import ServiceValidation from 'src/app/content/main/validations/ServiceValidation';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent extends URLLoader implements OnInit {

  serviceForm: FormGroup
  msg: ServiceMessage
  submitted = false


  get f() { return this.serviceForm.controls; }

  constructor(private validation: ServiceValidation,
    private message: ServiceMessage,
    private serviceTestService: ServiceTestService) {
    super()
    this.serviceForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {

  }

  reset() {
    this.serviceForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      console.log(this.serviceForm.value)
      this.serviceTestService.create(this.serviceForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }
  }

}
