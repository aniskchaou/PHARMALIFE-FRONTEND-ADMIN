import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { InvoiceComponent } from './content/invoice/invoice.component';
import { AchatComponent } from './content/achat/achat.component';
import { CategoryComponent } from './content/category/category.component';
import { ClientComponent } from './content/client/client.component';
import { CustructorComponent } from './content/custructor/custructor.component';
import { MedicamentComponent } from './content/medicament/medicament.component';
import { ServiceComponent } from './content/service/service.component';
import { StockComponent } from './content/stock/stock.component';
import { TypeComponent } from './content/type/type.component';
import { SupplierComponent } from './content/supplier/supplier.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { LoginComponent } from './content/login/login.component';
import { ConfigurationComponent } from './content/configuration/configuration.component';

const routes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'service',component:ServiceComponent},
  {path:'client',component:ClientComponent},
  {path:'category',component:CategoryComponent},
  {path:'buy',component:AchatComponent},
  {path:'constructor',component:CustructorComponent},
  {path:'medicament',component:MedicamentComponent},
  {path:'stock',component:StockComponent},
  {path:'supplier',component:SupplierComponent},
  {path:'type',component:TypeComponent},
  {path:'login',component:LoginComponent},
  {path:'configuration',component:ConfigurationComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',redirectTo:'login',pathMatch:'full'}]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InvoiceComponent,
    AchatComponent,
    CategoryComponent,
    ClientComponent,
    CustructorComponent,
    MedicamentComponent,
    ServiceComponent,
    StockComponent,
    TypeComponent,
    SupplierComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
