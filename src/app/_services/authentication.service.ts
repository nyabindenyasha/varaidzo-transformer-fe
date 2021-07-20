import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService {
    user: User = new User();

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        console.log(username, password);
        
        return this.http.post<any>(`${environment.apiUrl}/v1/userAccount/login`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                this.user.firstName = user.firstname;
                this.user.lastName = user.lastname;
                this.user.username = user.email;
                this.user.token = user.token;
                console.log(user);   
                console.log(this.user);              
                if (this.user && this.user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(this.user));
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}