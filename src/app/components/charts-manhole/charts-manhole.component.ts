import { Component, OnInit } from '@angular/core';
import { RequestHandler } from 'src/app/providers/requesthandler';
import { ManholeDetails } from 'src/app/models/manhole-details';

@Component({
  selector: 'app-charts-manhole',
  templateUrl: './charts-manhole.component.html',
  styleUrls: ['./charts-manhole.component.css']
})
export class ChartsManholeComponent implements OnInit {
  dataSource: any;
  title = "Manhole Intrusion";
  manHoleDetails: ManholeDetails;
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

  constructor(private request: RequestHandler) { }

  ngOnInit() {
    this.getManholeIntrusions();
    this.initialise();
  } 

  getManholeIntrusions() {
    this.request.get('/manholeintr', (result) => this.loadManholeIntrusions(result))
  }

  loadManholeIntrusions(manholes) {
    this.manHoleDetails = manholes;
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
