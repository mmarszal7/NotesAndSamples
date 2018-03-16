import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable()
export class AuthenticationService {

  constructor() { }

  login(username: string, password: string) {
    if (username == "admin" && password == "admin"){
      let user = new User();
      user.username = 'admin';
      user.password = 'admin';
      localStorage.setItem('currentUser', JSON.stringify(user))
      return true;
    }
    else
      return false;

    // return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
    //     .map((response: Response) => {
    //         // login successful if there's a jwt token in the response
    //         let user = response.json();
    //         if (user && user.token) {
    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             localStorage.setItem('currentUser', JSON.stringify(user));
    //         }

    //         return user;
    //     });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
