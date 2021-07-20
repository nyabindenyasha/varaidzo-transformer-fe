import { Component, OnInit } from '@angular/core';
import { RequestHandler } from 'src/app/providers/requesthandler';

@Component({
  selector: 'app-manhole-intrusion',
  templateUrl: './manhole-intrusion.component.html',
  styleUrls: ['./manhole-intrusion.component.css']
})
export class ManholeIntrusionComponent implements OnInit {
  manHoleDetails: any = new Array();

  constructor(private request: RequestHandler) {
  }

  ngOnInit() {
    this.getManholeIntrusions();
  }

  getManholeIntrusions() {
    this.request.get('/manholeintr', (result) => this.loadManholeIntrusions(result))
  }

  loadManholeIntrusions(manholes) {
    this.manHoleDetails = manholes;
    console.log(this.manHoleDetails);
  }
}
