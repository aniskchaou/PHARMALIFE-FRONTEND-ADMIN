import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import CategoryMessage from 'src/app/content/main/messages/CategoryMessage';
import CategoryTestService from 'src/app/content/main/mocks/CategoryTestService';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends URLLoader implements OnInit {


  moveEditCategory() {
    this._router.navigate(['/editcategory']);
  }

  moveViewCategory() {
    this._router.navigate(['/viewcategory']);
  }




  showsummary: boolean = false
  showgraphic: boolean = false
  categorys$
  id = 0


  constructor(private _router: Router, private categoryTestService: CategoryTestService,
    private messageService: CategoryMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.categoryTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.categoryTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.categorys$ = this.categoryTestService.getAll()

  }


}
