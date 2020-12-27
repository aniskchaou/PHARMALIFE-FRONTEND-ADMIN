import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit {

  constructor(private _router: Router){

         
        
  }

  ngOnInit(): void {
  }

  moveEditMedicament() {
  
    this._router.navigate(['/editmedicament']);
  }

  moveViewMedicament() {
    this._router.navigate(['/viewmedicament']);
  }

}
