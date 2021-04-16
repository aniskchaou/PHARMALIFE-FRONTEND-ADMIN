import { Component, OnInit } from '@angular/core';
import Company from '../../main/configs/company';
import CurrentUser from '../../main/configs/const';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor() { }

  entreprise = new Company()
  user = new CurrentUser()
  ngOnInit(): void {
  }

}
