import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: any = {
    userName: '',
    password: ''
  }

  router = inject(Router);

  onLogin() {
    if (this.loginObj.userName.toLowerCase() == "admin" && this.loginObj.password == "112233") {
      this.router.navigateByUrl("/dashboard");
    }
    else {
      alert("Wrong Credentials");
      this.loginObj.userName = '';
      this.loginObj.password = '';
    }
  }


}
