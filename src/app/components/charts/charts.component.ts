import { Component, Input, OnInit } from '@angular/core';
import { ManholeLocationRequest } from 'src/app/models/manhole_location_request';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  @Input() manholeLocationRequest: ManholeLocationRequest;

  manholeDataSource: any;
  oillevelDataSource: any;
  temperatureDataSource: any;
  // title1 = "Transformer Intrusions";
  // title2 = "Oil level Statistics";
  // title3 = "Temperature Statistics";

  title1: string;
  title2: string;
  title3: string;

  constructor() { }

  ngOnInit() {
    if (this.manholeLocationRequest == null) {
      this.title1 = "Transformer Intrusions";
      this.title2 = "Oil level Statistics";
      this.title3 = "Temperature Statistics";
    }
    else {
      this.title1 = this.manholeLocationRequest.name + " Transformer Intrusions";
      this.title2 = this.manholeLocationRequest.name + " Oil level Statistics";
      this.title3 = this.manholeLocationRequest.name + " Temperature Statistics";
    }

    this.initialise1();
    this.initialise2();
    this.initialise3();
  }

  initialise1() {
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

  initialise2() {
    this.oillevelDataSource = {
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

  initialise3() {
    this.temperatureDataSource = {
      chart: {
        caption: 'Temperature records for 2021',
        subCaption: 'Showing No. of temperature records per month',
        xAxisName: 'Months of the year',
        yAxisName: 'Temperature in Degrees Celcius',
        theme: 'fusion'
      },
      data: [
        { label: 'Jan', value: '39' },
        { label: 'Feb', value: '46' },
        { label: 'Mar', value: '48' },
        { label: 'Apr', value: '34' },
        { label: 'May', value: '51' },
        { label: 'Jun', value: '40' },
        { label: 'Jul', value: '43' },
        { label: 'Aug', value: '53' },
        { label: 'Sep', value: '58' },
        { label: 'Oct', value: '44' },
        { label: 'Nov', value: '51' },
        { label: 'Dec', value: '40' },
      ]
    }
  }

}
