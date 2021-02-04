import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from './../../../../../configs/URLLoader';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent extends URLLoader implements OnInit {

 
  constructor(private _router: Router) {
    super()
  }

  ngOnInit(): void {
    super.loadScripts()
    super.show('Pharma Life', 'Cette Application est en cours de développment.', 'info')
  }

  moveEditInvoice() {
    
    this._router.navigate(['/editinvoice']);
  }

  moveViewInvoice() {
    this._router.navigate(['/viewinvoice']);
  }

}
