import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { User } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WEbAPP';
  currentUser: User;

  constructor(private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser) console.log(this.currentUser);  
   }

  
  ngOnInit() {
  } 
  
}
