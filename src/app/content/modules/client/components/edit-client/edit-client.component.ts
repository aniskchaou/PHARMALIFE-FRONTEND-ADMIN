import { Component, OnInit } from '@angular/core';
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
    private message: ClientMessage) {
    super()
    this.model = new Client(0, '', '', '', '', '',
      '', '')
  }


  ngOnInit(): void {

    this.categoryTestService.ID.subscribe(idd => {
      this.model = this.categoryTestService.get(idd)
      if (this.model == undefined) {
        this.model = new Client(0, '', '', '', '', '',
          '', '')
      }
    })
  }

  edit() {
    this.categoryTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')


  }
}
