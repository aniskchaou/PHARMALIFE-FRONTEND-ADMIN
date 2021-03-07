import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

  add() {
    super.show("Alerte", "Cette fonctionalité est en cours de dévéloppement.", "info")
  }

}
