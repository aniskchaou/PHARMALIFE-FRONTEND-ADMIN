import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from './../../../../../configs/URLLoader';

@Component({
  selector: 'app-custructor',
  templateUrl: './custructor.component.html',
  styleUrls: ['./custructor.component.css']
})
export class CustructorComponent extends URLLoader implements OnInit {

  constructor(private _router: Router) {
    super()
  }

  ngOnInit(): void {
    super.loadScripts()
  }

  moveEditConstructor() {
    
    this._router.navigate(['/editconstructor']);
  }

  moveViewConstructor() {
    this._router.navigate(['/viewconstructor']);
  }

}
