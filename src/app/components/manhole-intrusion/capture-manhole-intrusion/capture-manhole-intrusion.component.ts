import { Component, OnInit } from '@angular/core';
import { ManholeIntrusion } from 'src/app/models/manhole-intrusion';
import swal from "sweetalert2";
import { RequestHandler } from 'src/app/providers/requesthandler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capture-manhole-intrusion',
  templateUrl: './capture-manhole-intrusion.component.html',
  styleUrls: ['./capture-manhole-intrusion.component.css']
})
export class CaptureManholeIntrusionComponent implements OnInit {

  data: ManholeIntrusion;

  constructor( private router: Router, private request: RequestHandler) { }

  ngOnInit() {
    if (this.data == null) this.data = new ManholeIntrusion();
  }

  onSubmit() {
    console.log(this.data);
    this.request.post('/v1/transformerIntrusion', this.data, (result) => {
      console.log(result);
      this.onSuccess(result);
    })
  }

  onSuccess(result) {
    swal.fire('', result.message, 'success');
    this.router.navigate(['/manhole-intrusions']);
  }

}
