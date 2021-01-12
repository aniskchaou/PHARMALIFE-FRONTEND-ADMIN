import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from './../../../../../configs/URLLoader';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent extends URLLoader implements OnInit {

 
         
  constructor(private _router: Router) {
    super()
  }

  ngOnInit(): void {
    super.loadScripts()
  }

  moveViewType() {

    this._router.navigate(['/edittype']);
  }
  moveEditType() {

    this._router.navigate(['/edittype']);
  }
}
