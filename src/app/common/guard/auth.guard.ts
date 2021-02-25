import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) {

  }

  // Authenticate guard for safe login.
  canActivate(): boolean {

    if (this.authService.loggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/login'])
      return false;
    }
  }
  
}
