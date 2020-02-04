import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

import {CalendarModule} from 'primeng/calendar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  value: Date;
  locations = [];

  constructor(private httpService: HttpService, private router: Router, private authService: AuthService) { }
  ngOnInit() {

    this.httpService.get('/locations/getLocations').subscribe((data: any) => {
      console.log(data);
      this.locations = data.locations;
    });
  }

  public navigate(): void {
    if (this.authService.isAuthenticated()) {
      console.log('here');
      this.router.navigate(['booking/1']);
    } else {
      console.log('there')
      this.router.navigate(['login/1']);
    }
  }
  
  public search(formValue): void {
    console.log('formValue', formValue.value);
    this.httpService.post('users/', formValue.value).subscribe((data) => {
      console.log('data', data);
    });
  }

}
