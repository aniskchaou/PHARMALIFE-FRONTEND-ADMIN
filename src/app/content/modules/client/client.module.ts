import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewClientComponent } from './components/view-client/view-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientComponent } from './components/client/client.component';
import { EditBuyComponent } from '../buy/components/edit-buy/edit-buy.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';



@NgModule({
  declarations: [ViewClientComponent,AddClientComponent,ClientComponent,EditClientComponent],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
