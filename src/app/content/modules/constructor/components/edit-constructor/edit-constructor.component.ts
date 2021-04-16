import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import ConstructorMessage from 'src/app/content/main/messages/ConstructorMessage';
import ConstructorTestService from 'src/app/content/main/mocks/ConstructorTestService';
import Constructor from 'src/app/content/main/models/Constructor';

@Component({
  selector: 'app-edit-constructor',
  templateUrl: './edit-constructor.component.html',
  styleUrls: ['./edit-constructor.component.css']
})
export class EditConstructorComponent extends URLLoader implements OnInit {

  model: Constructor = new Constructor(0, '', '', '', '', '', '', '', '', '', '', '')

  constructor(private constructorTestService:
    ConstructorTestService,
    private message: ConstructorMessage,
    private _router: Router) {
    super()
    this.model = new Constructor(0, '', '', '', '', '', '', '', '', '', '', '')
  }


  ngOnInit(): void {

    this.constructorTestService.ID.subscribe(idd => {
      this.model = this.constructorTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = new Constructor(0, '', '', '', '', '', '', '', '', '', '', '')
      }
    })
  }

  edit() {
    this.constructorTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
    this.moveToConstructor()

  }

  moveToConstructor() {
    this._router.navigate(['/constructor']);
  }

}
