import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import BuyMessage from 'src/app/content/main/messages/BuyMessage';
import BuyTestService from 'src/app/content/main/mocks/BuyTestService';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent extends URLLoader implements OnInit {



  moveEditBuy() {
    console.log();
    this._router.navigate(['/editbuy']);
  }

  moveViewBuy() {
    this._router.navigate(['/viewbuy']);
  }



  showsummary: boolean = false
  showgraphic: boolean = false
  buys$
  id = 0


  constructor(private _router: Router, private buyTestService: BuyTestService, private messageService: BuyMessage) {
    super()
  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.buyTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.buyTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.buys$ = this.buyTestService.getAll()

  }


}
