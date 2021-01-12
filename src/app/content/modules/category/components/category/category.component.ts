import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from './../../../../../configs/URLLoader';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends URLLoader implements OnInit {

  constructor(private _router: Router) {
    super()
  }

  ngOnInit(): void {
    super.loadScripts()
  }

  moveEditCategory(){
    this._router.navigate(['/editcategory']);
  }

  moveViewCategory() {
    this._router.navigate(['/viewcategory']);
  }

}
