import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import SupplierMessage from 'src/app/content/main/messages/SupplierMessage';
import SupplierTestService from 'src/app/content/main/mocks/SupplierTestService';
import Supplier from 'src/app/content/main/models/Supplier';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent extends URLLoader implements OnInit {

  model: Supplier = new Supplier(0, '', '', '', '', '')

  constructor(private categoryTestService:
    SupplierTestService,
    private message: SupplierMessage,
    private _router: Router) {
    super()
    this.model = new Supplier(0, '', '', '', '', '')
  }


  ngOnInit(): void {

    this.categoryTestService.ID.subscribe(idd => {
      this.model = this.categoryTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = new Supplier(0, '', '', '', '', '')
      }
    })
  }

  edit() {
    this.categoryTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
    this.moveToSupplier()

  }
  moveToSupplier() {
    this._router.navigate(['/supplier']);
  }
}
