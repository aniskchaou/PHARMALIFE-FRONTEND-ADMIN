import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSupplierComponent } from './components/add-supplier/add-supplier.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { EditSupplierComponent } from './components/edit-supplier/edit-supplier.component';
import { ViewSupplierComponent } from './components/view-supplier/view-supplier.component';


@NgModule({
  declarations: [AddSupplierComponent,SupplierComponent,EditSupplierComponent,ViewSupplierComponent],
  imports: [
    CommonModule,
  
  ]
})
export class SupplierModule { }
