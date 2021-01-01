import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';



import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BuyModule } from './content/modules/buy/buy.module';
import { CategoryModule } from './content/modules/category/category.module';
import { ClientModule } from './content/modules/client/client.module';
import { ConstructorModule } from './content/modules/constructor/constructor.module';
import { InvoiceModule } from './content/modules/invoice/invoice.module';
import { MedicamentModule } from './content/modules/medicament/medicament.module';
import { ServiceModule } from './content/modules/service/service.module';
import { StockModule } from './content/modules/stock/stock.module';
import { SupplierModule } from './content/modules/supplier/supplier.module';
import { TypeModule } from './content/modules/type/type.module';
import { SharedModule } from './content/shared/shared.module';
import { ViewCategoryComponent } from './view-category/view-category.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
   
    ViewCategoryComponent,
   
  ],
  imports: [
    BuyModule,
    CategoryModule,
    ClientModule,
    ConstructorModule,
    InvoiceModule,
    MedicamentModule,
    ServiceModule,
    StockModule,
    SupplierModule,
    TypeModule,
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
