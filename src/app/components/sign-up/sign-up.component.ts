import { Component, Input, OnInit } from '@angular/core';
import { RequestHandler } from 'src/app/providers/requesthandler';
import swal from "sweetalert2";
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Input() user: User;

  constructor(private router: Router, private request: RequestHandler) { }

  ngOnInit() {
    if (this.user == null)
      this.user = new User();
  }

  onSubmit() {
    console.log(this.user);

    if (this.user.id > 0) {
      this.request.update('/v1/userAccount/' + this.user.id, this.user, (result) => {
        console.log(result);
        this.onSuccess(result)
      })
    }

    else {
      this.request.post('/v1/userAccount', this.user, (result) => {
        console.log(result);
        this.onSuccess(result)
      })
    }


  }

  onSuccess(result) {
    swal.fire('', result.message, 'success');
    this.router.navigate(['/home']);
  }

}
