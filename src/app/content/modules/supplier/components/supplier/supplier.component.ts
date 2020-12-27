import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(private _router: Router){      
  }

  ngOnInit(): void {
  }

  moveEditSupplier() {
    
    this._router.navigate(['/editconstructor']);
  }

  moveViewSupplier() {
    this._router.navigate(['/viewconstructor']);
  }

}
