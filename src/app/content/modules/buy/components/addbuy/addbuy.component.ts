import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import BuyMessage from 'src/app/content/main/messages/BuyMessage';
import BuyTestService from 'src/app/content/main/mocks/BuyTestService';
import BuyValidation from 'src/app/content/main/validations/BuyValidation';

@Component({
  selector: 'app-add-buy',
  templateUrl: './addbuy.component.html',
  styleUrls: ['./addbuy.component.css']
})
export class AddbuyComponent extends URLLoader implements OnInit {

  buyForm: FormGroup
  msg: BuyMessage
  submitted = false


  get f() { return this.buyForm.controls; }

  constructor(private validation: BuyValidation,
    private message: BuyMessage,
    private buyTestService: BuyTestService) {
    super()
    this.buyForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.buyForm.reset()
  }

  add() {
    this.submitted = true;
    super.show("Alerte", "Cette fonctionalité est en cours de développement.", "info")
    if (this.validation.checkValidation()) {
      this.buyTestService.create(this.buyForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }



  }

}
