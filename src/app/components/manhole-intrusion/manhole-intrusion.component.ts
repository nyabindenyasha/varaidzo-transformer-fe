import { Component, Input, OnInit } from '@angular/core';
import { ManholeIntrusion } from 'src/app/models/manhole-intrusion';
import { ManholeLocationRequest } from 'src/app/models/manhole_location_request';
import { RequestHandler } from 'src/app/providers/requesthandler';

@Component({
  selector: 'app-manhole-intrusion',
  templateUrl: './manhole-intrusion.component.html',
  styleUrls: ['./manhole-intrusion.component.css']
})
export class ManholeIntrusionComponent implements OnInit {

  @Input() manholeLocationRequest: ManholeLocationRequest;

  title: string;
  manHoleDetails: ManholeIntrusion[] = [];

  constructor(private request: RequestHandler) {
  }

  ngOnInit() {
    console.log(this.manholeLocationRequest);
    if(this.manholeLocationRequest == null){
      this.title = "All ";
    this.getManholeIntrusions();
    }
    else{
      this.title = this.manholeLocationRequest.name + " ";
    this.getManholeIntrusionsByManhole(this.manholeLocationRequest)
    }
  }

  getManholeIntrusions() {
    this.request.get('/v1/transformerIntrusion/all', (result) => this.loadManholeIntrusions(result))
  }

  getManholeIntrusionsByManhole(manhole: ManholeLocationRequest) {
    this.request.get('/v1/transformerIntrusion/findByLocation/' + manhole.id, (result) => this.loadManholeIntrusions(result))
  }

  loadManholeIntrusions(manholes) {
    this.manHoleDetails = manholes;
    console.log(this.manHoleDetails);
  }
}
