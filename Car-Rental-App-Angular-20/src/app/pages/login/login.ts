import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Authservice } from '../../auth/service/authservice';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterOutlet, RouterLinkWithHref],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: any = {
    userName: '',
    password: ''
  }

  router = inject(Router);
  authService = inject(Authservice);

  onLogin() {
    if (this.loginObj.userName.toLowerCase() == "admin" && this.loginObj.password == "112233") {
      this.authService.logIn();
      this.router.navigateByUrl("/adminhome");
    }
    else {
      alert("Wrong Credentials");
      this.loginObj.userName = '';
      this.loginObj.password = '';
    }
  }


}
