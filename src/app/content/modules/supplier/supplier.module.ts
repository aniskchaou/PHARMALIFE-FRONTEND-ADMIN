import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSupplierComponent } from './components/add-supplier/add-supplier.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { EditSupplierComponent } from './components/edit-supplier/edit-supplier.component';
import { ViewSupplierComponent } from './components/view-supplier/view-supplier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalSupplierComponent } from './components/modal-supplier/modal-supplier.component';


@NgModule({
  declarations: [ModalSupplierComponent, AddSupplierComponent, SupplierComponent, EditSupplierComponent, ViewSupplierComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

  ]
})
export class SupplierModule { }
