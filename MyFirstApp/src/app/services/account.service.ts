import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
// @Injectable({
//   providedIn: 'root'     bu şekilde de global olarak tanımlayabiliriz. Fakat tek yerden kontrol etmek için app.moduleden ekliyorum.
// })
export class AccountService {

  constructor() { }

  loggedIn = false;

  login(user: User): boolean {

    if (user.userName == 'seyyit' && user.password == '1234') {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
