import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeComponent } from './components/type/type.component';
import { AddTypeComponent } from './components/add-type/add-type.component';
import { EditTypeComponent } from './components/edit-type/edit-type.component';



@NgModule({
  declarations: [TypeComponent,AddTypeComponent,EditTypeComponent],
  imports: [
    CommonModule
  ]
})
export class TypeModule { }
