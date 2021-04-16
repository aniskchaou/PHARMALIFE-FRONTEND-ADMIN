import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import CategoryMessage from 'src/app/content/main/messages/CategoryMessage';
import CategoryTestService from 'src/app/content/main/mocks/CategoryTestService';
import Category from 'src/app/content/main/models/Category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent extends URLLoader implements OnInit {

  model: Category = new Category(0, '')

  constructor(private categoryTestService:
    CategoryTestService,
    private message: CategoryMessage,
    private _router: Router) {
    super()
    this.model = new Category(0, '')
  }


  moveCategory() {
    this._router.navigate(['/category']);
  }

  ngOnInit(): void {

    this.categoryTestService.ID.subscribe(idd => {

      this.model = this.categoryTestService.get(parseInt(idd))
      console.log(this.model)
      if (this.model == undefined) {
        this.model = new Category(0, '')
      }
    })
  }

  edit() {
    this.categoryTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
    this.moveCategory()


  }
}
