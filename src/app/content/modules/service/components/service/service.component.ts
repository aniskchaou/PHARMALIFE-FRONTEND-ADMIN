import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import ServiceMessage from 'src/app/content/main/messages/ServiceMessage';
import ServiceTestService from 'src/app/content/main/mocks/ServiceTestService';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent extends URLLoader implements OnInit {



  moveEditService() {

    this._router.navigate(['/editservice']);
  }

  moveViewService() {
    this._router.navigate(['/viewservice']);
  }







  showsummary: boolean = false
  showgraphic: boolean = false
  services$
  id = 0


  constructor(private _router: Router, private serviceTestService: ServiceTestService, private messageService: ServiceMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.serviceTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.serviceTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.services$ = this.serviceTestService.getAll()

  }


}
