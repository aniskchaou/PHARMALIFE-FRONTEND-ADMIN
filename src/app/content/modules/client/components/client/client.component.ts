import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import ClientMessage from 'src/app/content/main/messages/ClientMessage';
import ClientTestService from 'src/app/content/main/mocks/ClientTestService';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent extends URLLoader implements OnInit {



  moveEditClient() {

    this._router.navigate(['/editclient']);
  }

  moveViewClient() {
    this._router.navigate(['/viewclient']);
  }



  showsummary: boolean = false
  showgraphic: boolean = false
  clients$
  id = 0


  constructor(private _router: Router, private clientTestService: ClientTestService, private messageService: ClientMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.clientTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.clientTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.clients$ = this.clientTestService.getAll()

  }


}
