import { Component, OnInit } from '@angular/core';
import { RequestHandler } from 'src/app/providers/requesthandler';
import swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  data = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
  };

  constructor(private router: Router, private request: RequestHandler) { }

  ngOnInit() {
  } 

  onSubmit() {
    console.log(this.data);
    this.request.post('/users/register', this.data, (result) => {
      console.log(result);
      this.onSuccess(result)
    })
  }

  onSuccess(result) {
    swal.fire('', result.message, 'success');
    this.router.navigate(['/login']);
  }

}
