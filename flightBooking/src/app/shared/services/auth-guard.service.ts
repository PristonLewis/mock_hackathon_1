import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardEService {

  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (true) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

