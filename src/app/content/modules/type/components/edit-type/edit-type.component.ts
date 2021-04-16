import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import TypeMessage from 'src/app/content/main/messages/TypeMessage';
import TypeTestService from 'src/app/content/main/mocks/TypeTestService';
import Type from 'src/app/content/main/models/Type';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.css']
})
export class EditTypeComponent extends URLLoader implements OnInit {

  model: Type = new Type(0, '', '', '', '', '')

  constructor(private categoryTestService:
    TypeTestService,
    private message: TypeMessage,
    private _router: Router) {
    super()
    this.model = new Type(0, '', '', '', '', '')
  }


  ngOnInit(): void {

    this.categoryTestService.ID.subscribe(idd => {
      this.model = this.categoryTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = new Type(0, '', '', '', '', '')
      }
    })
  }

  edit() {
    this.categoryTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
    this.moveToMedType()

  }

  moveToMedType() {
    this._router.navigate(['/type']);
  }
}
