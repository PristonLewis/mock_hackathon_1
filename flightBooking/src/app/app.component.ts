import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public title: string
  public isSigned;
  public username: string
  constructor(private authService: AuthService) { 
      
       this.title = 'flightBooking';
       this.isSigned = false;
       this.username = '';

  }

  
  ngOnInit(): void {

    this.authService.subject.subscribe((data: string) => {
        this.isSigned = (localStorage.getItem('userid') !== '');
        this.username = localStorage.getItem('username');
    });
  }
  /**
   *  signout details
   */
  public signout(): void {
    localStorage.setItem('userid', '');
    localStorage.setItem('username', '');
    this.authService.changeAuth('');
  }
}
