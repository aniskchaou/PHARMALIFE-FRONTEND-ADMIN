import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalCategoryComponent } from './components/modal-category/modal-category.component';



@NgModule({
  declarations: [CategoryComponent, AddCategoryComponent, EditCategoryComponent, ModalCategoryComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class CategoryModule { }
