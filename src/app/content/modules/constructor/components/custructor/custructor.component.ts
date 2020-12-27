import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custructor',
  templateUrl: './custructor.component.html',
  styleUrls: ['./custructor.component.css']
})
export class CustructorComponent implements OnInit {

  constructor(private _router: Router){
     
  }

  ngOnInit(): void {
  }

  moveEditConstructor() {
    
    this._router.navigate(['/editconstructor']);
  }

  moveViewConstructor() {
    this._router.navigate(['/viewconstructor']);
  }

}
