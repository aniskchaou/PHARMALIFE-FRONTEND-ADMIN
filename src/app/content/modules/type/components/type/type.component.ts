import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import TypeMessage from 'src/app/content/main/messages/TypeMessage';
import TypeTestService from 'src/app/content/main/mocks/TypeTestService';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent extends URLLoader implements OnInit {




  moveViewType() {

    this._router.navigate(['/edittype']);
  }
  moveEditType() {

    this._router.navigate(['/edittype']);
  }


  types$
  id = 0


  constructor(private _router: Router, private typeTestService: TypeTestService,
    private messageService: TypeMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.typeTestService.ID.next(id.toString())

  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.typeTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.types$ = this.typeTestService.getAll()

  }

}
