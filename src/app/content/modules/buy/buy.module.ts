import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBuyComponent } from './components/view-buy/view-buy.component';
import { EditBuyComponent } from './components/edit-buy/edit-buy.component';
import { BuyComponent } from './components/buy/buy.component';
import { AddbuyComponent } from './components/addbuy/addbuy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewBuyComponent, EditBuyComponent, BuyComponent, AddbuyComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class BuyModule { }
