import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  
  private _isLoggedIn = signal<boolean>(false);
  readonly isLoggedIn = this._isLoggedIn.asReadonly();
  logIn(){
    this._isLoggedIn.set(true);
    console.log("login ",this.isLoggedIn());
    
  }
  logOut(){
    this._isLoggedIn.set(false);
    console.log("logout ",this.isLoggedIn());
  }

}
