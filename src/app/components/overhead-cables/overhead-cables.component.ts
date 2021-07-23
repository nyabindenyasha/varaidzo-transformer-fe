import { Component, Input, OnInit } from '@angular/core';
import { RequestHandler } from 'src/app/providers/requesthandler';
import { OilLevel } from 'src/app/models/oil-level';
import { ManholeLocationRequest } from 'src/app/models/manhole_location_request';

@Component({
  selector: 'app-overhead-cables',
  templateUrl: './overhead-cables.component.html',
  styleUrls: ['./overhead-cables.component.css']
})
export class OverheadCablesComponent implements OnInit {

  @Input() manholeLocationRequest: ManholeLocationRequest;

  title: string;
  oilLevelList: OilLevel[];

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
    this.request.get('/v1/oilLevel/all', (result) => this.load(result))
  }

  load(x: OilLevel[]) {
    this.oilLevelList = x;
  }

  getManholeIntrusionsByManhole(manhole: ManholeLocationRequest) {
    this.request.get('/v1/oilLevel/findByLocation/' + manhole.id, (result) => this.load(result))
  }

}
