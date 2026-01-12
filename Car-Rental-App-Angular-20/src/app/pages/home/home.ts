import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  router=inject(Router)
  browseVehicles(){
    this.router.navigateByUrl("/vehiclelist");
  }
  adminLogin(){
    this.router.navigateByUrl('/login');
  }
}
