import { Component, Input, OnInit } from '@angular/core';
import { ManholeLocationRequest } from 'src/app/models/manhole_location_request';
import { Temperature } from 'src/app/models/temperature';
import { RequestHandler } from 'src/app/providers/requesthandler';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.css']
})
export class TemperaturesComponent implements OnInit {

  @Input() manholeLocationRequest: ManholeLocationRequest;

  title: string;
  temperatureList: Temperature[];

  constructor(private request: RequestHandler) {}

  ngOnInit() {
    console.log(this.manholeLocationRequest);
    if(this.manholeLocationRequest == null){
      this.title = "All ";
    this.getAll();
    }
    else{
      this.title = this.manholeLocationRequest.name + " ";
    this.getManholeIntrusionsByManhole(this.manholeLocationRequest)
    }
  }

  getAll(){
    this.request.get('/v1/temperature/all', (result) => this.load(result))
  }

  load(x: Temperature[]) {
    this.temperatureList = x;
  }

  getManholeIntrusionsByManhole(manhole: ManholeLocationRequest) {
    this.request.get('/v1/temperature/findByLocation/' + manhole.id, (result) => this.load(result))
  }


}
