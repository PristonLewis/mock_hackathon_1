import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public  subject = new Subject<string>();
  public isAuthenticated(): boolean {
    console.log(localStorage.getItem('userid') !== '');
    return localStorage.getItem('userid') !== '';
  }

  public changeAuth(username): void {
    this.subject.next(username);
  }
}
