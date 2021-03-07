import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { URLLoader } from '../../main/configs/URLLoader';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends URLLoader implements OnInit {

  constructor() { super() }




  ngOnInit(): void {

    let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
    let data2 = [43000, 53000, 34000, 38000, 66000, 77000, 53000];
    let labels = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var ctx1 = document.getElementsByClassName("revenue-chart");
    var ctx2 = document.getElementsByClassName("expense-chart");
    this.renderChart(data, labels, ctx1, 'rgba(204, 0, 0, 1)');
    this.renderChart(data2, labels, ctx2, 'rgba(24, 0, 204, 1)');
    super.show('Pharma Life', 'Cette Application est en cours de développment.', 'info')
  }


  renderChart(data, labels, ctx, color) {


    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '',
          data: data,
          backgroundColor: color,
          borderColor: color,
        }]
      },
    });
  }

}
