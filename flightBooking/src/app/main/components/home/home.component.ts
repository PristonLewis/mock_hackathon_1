import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  selectDate: Date;
  locations = [];

  constructor(private httpService: HttpService, private router: Router) { }
  ngOnInit() {

    this.httpService.get('/locations/getLocations').subscribe((data: any) => {
      console.log(data);
      this.locations = data.locations;
    });
  }

  public navigate(): void {
    this.router.navigate(['/booking']);
  }

}
