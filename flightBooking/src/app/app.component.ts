import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public title = 'flightBooking';
  public isSigned = false;
  public username = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.subject.subscribe((data: string) => {
        this.isSigned = (localStorage.getItem('userid') !== '');
        this.username = localStorage.getItem('username');
    });
  }
  public signout(): void {
    localStorage.setItem('userid', '');
    localStorage.setItem('username', '');
    this.authService.changeAuth('');
  }
}
