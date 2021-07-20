import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-overhead',
  templateUrl: './charts-overhead.component.html',
  styleUrls: ['./charts-overhead.component.css']
})
export class ChartsOverheadComponent implements OnInit {
  dataSource: any;
  title = "Overhead Cables";
  janValue: number;
  febValue: number;
  marValue: number;
  aprValue: number;
  mayValue: number;
  junValue: number;
  julValue: number;
  augValue: number;
  sepValue: number;
  octValue: number;
  novValue: number;
  decValue: number;

  constructor() { }

  ngOnInit() {
    this.initialise();
  } 

  initialise(){
    this.dataSource = {
    chart: {
      caption: 'Manhole Intrusion cases for 2019',
      subCaption: 'Showing No. of theft cases per month',
      xAxisName: 'Months of the year',
      yAxisName: 'No. of theft cases',
      theme: 'fusion'
    },
    data: [
      { label: 'Jan', value: '9' },
      { label: 'Feb', value: '26' },
      { label: 'Mar', value: '18' },
      { label: 'Apr', value: '14' },
      { label: 'May', value: '11' },
      { label: 'Jun', value: '10' },
      { label: 'Jul', value: '3' },
      { label: 'Aug', value: '3' },
      { label: 'Sep', value: '18' },
      { label: 'Oct', value: '14' },
      { label: 'Nov', value: '11' },
      { label: 'Dec', value: '10' },
    ]
  }
  }
}
