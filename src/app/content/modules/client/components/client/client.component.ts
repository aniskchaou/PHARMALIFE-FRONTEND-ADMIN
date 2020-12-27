import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private _router: Router){     
  }

  ngOnInit(): void {
  }

  moveEditClient() {
  
    this._router.navigate(['/editclient']);
  }

  moveViewClient() {
    this._router.navigate(['/viewclient']);
  }

}
