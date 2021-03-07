import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import CategoryMessage from 'src/app/content/main/messages/CategoryMessage';
import CategoryTestService from 'src/app/content/main/mocks/CategoryTestService';
import CategoryValidation from 'src/app/content/main/validations/CategoryValidation';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent extends URLLoader implements OnInit {
  categoryForm: FormGroup
  msg: CategoryMessage
  submitted = false


  get f() { return this.categoryForm.controls; }

  constructor(private validation: CategoryValidation,
    private message: CategoryMessage,
    private categoryTestService: CategoryTestService) {
    super()
    this.categoryForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.categoryForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.categoryTestService.create(this.categoryForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }



  }

}
