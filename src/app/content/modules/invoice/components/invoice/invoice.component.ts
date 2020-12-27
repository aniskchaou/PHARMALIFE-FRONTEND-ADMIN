import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private _router: Router){

         
        
  }

  ngOnInit(): void {
  }

  moveEditInvoice() {
    
    this._router.navigate(['/editinvoice']);
  }

  moveViewInvoice() {
    this._router.navigate(['/viewinvoice']);
  }

}
