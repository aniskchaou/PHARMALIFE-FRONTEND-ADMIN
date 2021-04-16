import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import MedicamentMessage from 'src/app/content/main/messages/MedicamentMessage';
import MedicamentTestService from 'src/app/content/main/mocks/MedicamentTestService';
import Medicament from 'src/app/content/main/models/Medicament';

@Component({
  selector: 'app-edit-medicament',
  templateUrl: './edit-medicament.component.html',
  styleUrls: ['./edit-medicament.component.css']
})
export class EditMedicamentComponent extends URLLoader implements OnInit {

  model: Medicament = new Medicament(0, '', '', '', '', '',
    '', '', '', '', '', '', '')

  constructor(private categoryTestService:
    MedicamentTestService,
    private message: MedicamentMessage,
    private _router: Router) {
    super()
    this.model = new Medicament(0, '', '', '', '', '',
      '', '', '', '', '', '', '')
  }


  ngOnInit(): void {

    this.categoryTestService.ID.subscribe(idd => {
      this.model = this.categoryTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = new Medicament(0, '', '', '', '', '',
          '', '', '', '', '', '', '')
      }
    })
  }

  edit() {
    this.categoryTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
    this.moveToMedicament()

  }
  moveToMedicament() {
    this._router.navigate(['/medicament']);
  }

}
