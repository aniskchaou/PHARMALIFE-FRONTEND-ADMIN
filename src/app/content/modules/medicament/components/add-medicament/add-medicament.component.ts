import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import MedicamentMessage from 'src/app/content/main/messages/MedicamentMessage';
import MedicamentTestService from 'src/app/content/main/mocks/MedicamentTestService';
import MedicamentValidation from 'src/app/content/main/validations/MedicamentValidation';

@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.css']
})
export class AddMedicamentComponent extends URLLoader implements OnInit {

  medicamentForm: FormGroup
  msg: MedicamentMessage
  submitted = false


  get f() { return this.medicamentForm.controls; }

  constructor(private validation: MedicamentValidation,
    private message: MedicamentMessage,
    private medicamentTestService: MedicamentTestService) {
    super()
    this.medicamentForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.medicamentForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      console.log(this.medicamentForm.value)
      this.medicamentTestService.create(this.medicamentForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }



  }

}
