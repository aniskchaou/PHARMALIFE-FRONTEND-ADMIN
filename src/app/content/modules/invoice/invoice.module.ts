import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { EditInvoiceComponent } from './components/edit-invoice/edit-invoice.component';
import { ViewInvoiceComponent } from './components/view-invoice/view-invoice.component';



@NgModule({
  declarations: [AddInvoiceComponent,InvoiceComponent,EditInvoiceComponent,ViewInvoiceComponent],
  imports: [
    CommonModule
  ]
})
export class InvoiceModule { }
