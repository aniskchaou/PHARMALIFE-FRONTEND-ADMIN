import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

 
         
  constructor(private _router: Router){     
  }      


  ngOnInit(): void {
  }

  moveViewType() {

    this._router.navigate(['/edittype']);
  }
  moveEditType() {

    this._router.navigate(['/edittype']);
  }
}
