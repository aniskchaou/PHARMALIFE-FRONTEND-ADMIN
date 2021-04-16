import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [ConfigurationComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
