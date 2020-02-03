import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'flightBooking';

  public signout(): void {
    localStorage.setItem('userid', '');
    localStorage.setItem('username', '');
  }
}
