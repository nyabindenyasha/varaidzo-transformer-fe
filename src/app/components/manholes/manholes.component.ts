import { Component, OnInit } from '@angular/core';
import { RequestHandler } from 'src/app/providers/requesthandler';

@Component({
  selector: 'app-manholes',
  templateUrl: './manholes.component.html',
  styleUrls: ['./manholes.component.css']
})
export class ManholesComponent implements OnInit {
  manHoleDetails: any = new Array();

  constructor(private request: RequestHandler) {
  }

  ngOnInit() {
    this.getManHoles();
  }

  getManHoles() {
    this.request.get('/manholeloc', (result) => this.loadManholes(result))
  }


  loadManholes(manholes) {
    this.manHoleDetails = manholes;
    console.log(manholes);
  }

}
