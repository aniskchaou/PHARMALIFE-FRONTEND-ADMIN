import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import BuyMessage from 'src/app/content/main/messages/BuyMessage';
import BuyTestService from 'src/app/content/main/mocks/BuyTestService';
import Buy from 'src/app/content/main/models/Buy';

@Component({
  selector: 'app-edit-buy',
  templateUrl: './edit-buy.component.html',
  styleUrls: ['./edit-buy.component.css']
})
export class EditBuyComponent extends URLLoader implements OnInit {


  model: Buy = new Buy(0, '', '', '', '', '', '')

  constructor(private categoryTestService:
    BuyTestService,
    private message: BuyMessage,
    private _router: Router) {
    super()
    this.model = new Buy(0, '', '', '', '', '', '')
  }


  ngOnInit(): void {

    this.categoryTestService.ID.subscribe(idd => {
      this.model = this.categoryTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = new Buy(0, '', '', '', '', '', '')
      }
    })
  }

  edit() {
    this.categoryTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
    this.moveToBuy()
  }

  moveToBuy() {
    this._router.navigate(['/buy']);
  }
}
