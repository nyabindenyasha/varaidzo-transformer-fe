import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { RequestHandler } from 'src/app/providers/requesthandler';

@Component({
  selector: 'app-manholes',
  templateUrl: './manholes.component.html',
  styleUrls: ['./manholes.component.css']
})
export class ManholesComponent implements OnInit {
  manHoleDetails: any = new Array();
  category: Category = new Category();

  constructor(private request: RequestHandler) {
  }

  ngOnInit() {
    this.getManHoles();
  }

  getManHoles() {
    this.request.get('/v1/transformerLocation/all', (result) => {
      console.log(result);
      this.loadManholes(result);
    })
  }


  loadManholes(manholes) {
    this.manHoleDetails = manholes;
    console.log(manholes);
  }

  onMore(item: any, event){
    console.log("onMore")
    console.log(item)
    console.log(event)
  }

}
