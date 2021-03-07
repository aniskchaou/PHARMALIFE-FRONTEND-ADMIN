import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/content/main/configs/URLLoader';
import MedicamentMessage from 'src/app/content/main/messages/MedicamentMessage';
import MedicamentTestService from 'src/app/content/main/mocks/MedicamentTestService';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent extends URLLoader implements OnInit {





  moveEditMedicament() {

    this._router.navigate(['/editmedicament']);
  }

  moveViewMedicament() {
    this._router.navigate(['/viewmedicament']);
  }



  showsummary: boolean = false
  showgraphic: boolean = false
  medicaments$
  id = 0


  constructor(private _router: Router, private medicamentTestService: MedicamentTestService, private messageService: MedicamentMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.medicamentTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.medicamentTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.medicaments$ = this.medicamentTestService.getAll()

  }

}
