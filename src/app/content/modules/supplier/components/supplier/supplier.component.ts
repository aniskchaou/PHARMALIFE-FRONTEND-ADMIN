import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from './../../../../../configs/URLLoader';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent extends URLLoader implements OnInit {

  constructor(private _router: Router) {
    super()
  }

  ngOnInit(): void {
    super.loadScripts()
  }

  moveEditSupplier() {
    
    this._router.navigate(['/editconstructor']);
  }

  moveViewSupplier() {
    this._router.navigate(['/viewconstructor']);
  }

}
