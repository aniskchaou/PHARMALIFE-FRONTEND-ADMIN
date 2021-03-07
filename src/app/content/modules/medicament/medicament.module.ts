import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMedicamentComponent } from './components/add-medicament/add-medicament.component';
import { EditMedicamentComponent } from './components/edit-medicament/edit-medicament.component';
import { MedicamentComponent } from './components/medicament/medicament.component';
import { ViewMedicamentComponent } from './components/view-medicament/view-medicament.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddMedicamentComponent, EditMedicamentComponent, MedicamentComponent, ViewMedicamentComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class MedicamentModule { }
