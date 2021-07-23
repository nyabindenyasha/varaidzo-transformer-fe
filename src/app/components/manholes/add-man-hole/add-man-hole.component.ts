import { ManholeLocationRequest } from './../../../models/manhole_location_request';
import { Component, OnInit } from '@angular/core';
import { RequestHandler } from 'src/app/providers/requesthandler';
import swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-man-hole',
  templateUrl: './add-man-hole.component.html',
  styleUrls: ['./add-man-hole.component.css']
})
export class AddManHoleComponent implements OnInit {

  data: ManholeLocationRequest;

  constructor(private router: Router, private request: RequestHandler) { }

  ngOnInit() {
   if(this.data == null) this.data = new ManholeLocationRequest();
  }

  onSubmit(){
    console.log(this.data);
    this.request.post('/v1/transformerLocation', this.data, (result) => {
      console.log(result);
      this.onSuccess(result)
    })
  } 

  onSuccess(result) {
    swal.fire('', result.message, 'success');
    this.router.navigate(['/manholes']);
  }
}
