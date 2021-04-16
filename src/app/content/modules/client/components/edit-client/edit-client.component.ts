import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import ClientMessage from 'src/app/content/main/messages/ClientMessage';
import ClientTestService from 'src/app/content/main/mocks/ClientTestService';
import Client from 'src/app/content/main/models/Client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent extends URLLoader implements OnInit {

  model: Client = new Client(0, '', '', '', '', '',
    '', '')

  constructor(private categoryTestService:
    ClientTestService,
    private message: ClientMessage, private _router: Router) {
    super()
    this.model = new Client(0, '', '', '', '', '',
      '', '')
  }

  moveToClient() {
    this._router.navigate(['/client']);
  }

  ngOnInit(): void {

    this.categoryTestService.ID.subscribe(idd => {
      this.model = this.categoryTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = new Client(0, '', '', '', '', '',
          '', '')
      }
    })
  }

  edit() {
    this.categoryTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
    this.moveToClient()
  }


}
