import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  manholeDataSource: any;
  overheadCableDataSource: any;
  title1 = "Transformer Intrusions";
  title2 = "Oil level Statistics";

  constructor() { }

  ngOnInit() {
    this.initialise1();
    this.initialise2();
  } 

  initialise1(){
    this.manholeDataSource = {
    chart: {
      caption: 'Transformer Intrusion cases for 2021',
      subCaption: 'Showing No. of theft cases per month',
      xAxisName: 'Months of the year',
      yAxisName: 'No. of Intrusion cases',
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

  initialise2(){
    this.overheadCableDataSource = {
    chart: {
      caption: 'Oil level records for 2021',
      subCaption: 'Showing oil level records per month',
      xAxisName: 'Months of the year',
      yAxisName: 'Volume of oil',
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
