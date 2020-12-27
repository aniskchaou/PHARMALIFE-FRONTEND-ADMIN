import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private _router: Router){

         
        
  }

  ngOnInit(): void {
  }

  moveEditService() {
    
    this._router.navigate(['/editservice']);
  }

  moveViewService() {
    this._router.navigate(['/viewservice']);
  }

}
