import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import ServiceMessage from 'src/app/content/main/messages/ServiceMessage';
import ServiceTestService from 'src/app/content/main/mocks/ServiceTestService';
import Service from 'src/app/content/main/models/Service';



@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent extends URLLoader implements OnInit {

  model: Service = new Service(0, '', '', '', '')

  constructor(private categoryTestService:
    ServiceTestService,
    private message: ServiceMessage,
    private _router: Router) {
    super()
    this.model = new Service(0, '', '', '', '')
  }


  ngOnInit(): void {

    this.categoryTestService.ID.subscribe(idd => {
      this.model = this.categoryTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = new Service(0, '', '', '', '')
      }
    })
  }

  edit() {
    this.categoryTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
    this.moveToService()

  }

  moveToService() {
    this._router.navigate(['/service']);
  }

}
