import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from './../../../../../configs/URLLoader';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent extends URLLoader implements OnInit {

  constructor(private _router: Router) {
    super()
  }

  ngOnInit(): void {
    super.loadScripts()
  }

  moveEditBuy() {
    console.log();
    this._router.navigate(['/editbuy']);
  }

  moveViewBuy() {
    this._router.navigate(['/viewbuy']);
  }

}
