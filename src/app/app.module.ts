import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';



import { routes } from './content/main/routes/routes';
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
import { ViewCategoryComponent } from './content/modules/category/components/view-category/view-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortcutMenuComponent } from './template/shortcut-menu/shortcut-menu.component';
import { MessagesComponent } from './template/messages/messages.component';
import { LanguageMenuComponent } from './template/language-menu/language-menu.component';
import { LoginComponent } from './content/shared/login/login.component';
import { UserProfileMenuComponent } from './template/user-profile-menu/user-profile-menu.component';
import { ModalBuyComponent } from './content/modules/buy/components/modal-buy/modal-buy.component';
import { ModalCategoryComponent } from './content/modules/category/components/modal-category/modal-category.component';
import { ModalClientComponent } from './content/modules/client/components/modal-client/modal-client.component';
import { ModalConstructorComponent } from './content/modules/constructor/components/modal-constructor/modal-constructor.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,

    ViewCategoryComponent,

    MessagesComponent,

    ShortcutMenuComponent,

    LanguageMenuComponent,

    LoginComponent,
    UserProfileMenuComponent,



  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
    RouterModule.forRoot(routes),

  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
