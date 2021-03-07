import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewServiceComponent } from './components/view-service/view-service.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { EditServiceComponent } from './components/edit-service/edit-service.component';
import { ServiceComponent } from './components/service/service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewServiceComponent, AddServiceComponent, EditServiceComponent, ServiceComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ServiceModule { }
