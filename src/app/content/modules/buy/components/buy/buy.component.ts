import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  moveEditBuy() {
    console.log();
    this._router.navigate(['/editbuy']);
  }

  moveViewBuy() {
    this._router.navigate(['/viewbuy']);
  }

}
