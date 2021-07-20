import { Component, OnInit } from '@angular/core';
import { RequestHandler } from 'src/app/providers/requesthandler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Overhead } from 'src/app/models/overhead';

@Component({
  selector: 'app-overhead-cables',
  templateUrl: './overhead-cables.component.html',
  styleUrls: ['./overhead-cables.component.css']
})
export class OverheadCablesComponent implements OnInit {
  overheads:Overhead[];
  i: number = 1;

  constructor(private request: RequestHandler) {}

  ngOnInit() {
  this.getOverhead();
  }

  getOverhead(){
    this.request.get('/overheadcables', (result) => this.loadManholes(result))
  }

  loadManholes(overheadcables: Overhead[]) {
    this.overheads = overheadcables;
    this.overheads.forEach(overhead => overhead.id = this.i++ )
    console.log(this.overheads);
  }

}
