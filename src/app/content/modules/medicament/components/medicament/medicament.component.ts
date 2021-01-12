import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from './../../../../../configs/URLLoader';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent extends URLLoader implements OnInit {

  constructor(private _router: Router) {
    super()
  }

  ngOnInit(): void {
    super.loadScripts()
  }

  moveEditMedicament() {
  
    this._router.navigate(['/editmedicament']);
  }

  moveViewMedicament() {
    this._router.navigate(['/viewmedicament']);
  }

}
