import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authservice } from '../service/authservice';

export const authguardGuard: CanActivateFn = (route, state) => {
  const authService = inject(Authservice);
  const router = inject(Router);
  return authService.isLoggedIn() ? true : router.navigateByUrl("/login")
  // return true;
};
