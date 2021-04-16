import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import SupplierMessage from 'src/app/content/main/messages/SupplierMessage';
import SupplierTestService from 'src/app/content/main/mocks/SupplierTestService';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent extends URLLoader implements OnInit {



  moveEditSupplier() {

    this._router.navigate(['/editconstructor']);
  }

  moveViewSupplier() {
    this._router.navigate(['/viewconstructor']);
  }


  showsummary: boolean = false
  showgraphic: boolean = false
  suppliers$
  id = 0


  constructor(private _router: Router, private supplierTestService: SupplierTestService, private messageService: SupplierMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.supplierTestService.ID.next(id.toString())
    // this.moveEditSupplier()
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.supplierTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.suppliers$ = this.supplierTestService.getAll()

  }


}
