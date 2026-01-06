import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { Authservice } from '../../auth/service/authservice';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  authService = inject(Authservice);
  router = inject(Router)
  onLogOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }

}
