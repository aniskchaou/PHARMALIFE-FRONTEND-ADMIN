import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import ConstructorMessage from 'src/app/content/main/messages/ConstructorMessage';
import ConstructorTestService from 'src/app/content/main/mocks/ConstructorTestService';

@Component({
  selector: 'app-custructor',
  templateUrl: './custructor.component.html',
  styleUrls: ['./custructor.component.css']
})
export class CustructorComponent extends URLLoader implements OnInit {



  moveEditConstructor() {

    this._router.navigate(['/editconstructor']);
  }

  moveViewConstructor() {
    this._router.navigate(['/viewconstructor']);
  }



  showsummary: boolean = false
  showgraphic: boolean = false
  constructors$
  id = 0


  constructor(private _router: Router, private constructorTestService: ConstructorTestService, private messageService: ConstructorMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.constructorTestService.ID.next(id.toString())
    //this.moveEditConstructor()
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.constructorTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.constructors$ = this.constructorTestService.getAll()

  }


}
