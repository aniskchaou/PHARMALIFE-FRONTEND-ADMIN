import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddConstructorComponent } from './components/add-constructor/add-constructor.component';
import { EditConstructorComponent } from './components/edit-constructor/edit-constructor.component';
import { CustructorComponent } from './components/custructor/custructor.component';
import { ViewConstructorComponent } from './components/view-constructor/view-constructor.component';



@NgModule({
  declarations: [AddConstructorComponent,EditConstructorComponent,CustructorComponent,ViewConstructorComponent],
  imports: [
    CommonModule
  ]
})
export class ConstructorModule { }
