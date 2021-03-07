import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent extends URLLoader implements OnInit {






  moveEditInvoice() {

    this._router.navigate(['/editinvoice']);
  }

  moveViewInvoice() {
    this._router.navigate(['/viewinvoice']);
  }




  showsummary: boolean = false
  showgraphic: boolean = false
  invoices$
  id = 0


  constructor(private _router: Router) {
    super()

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
