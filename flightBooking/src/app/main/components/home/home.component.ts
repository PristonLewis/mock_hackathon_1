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
  public value: Date;
  public locations = [];
  public searchResults = [];
  public today: number = Date.now();

  constructor(private httpService: HttpService, private router: Router, private authService: AuthService) { }
  ngOnInit() {

    this.httpService.get('/locations/getLocations').subscribe((data: any) => {
      this.locations = data.locations;
    });
  }

  public navigate(id): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['booking/' + id]);
    } else {
      this.router.navigate(['login/' + id]);
    }
  }

  public search(formValue): void {
    const payload = formValue.value;
    this.httpService.get(`/search/searchresults?fromLocation=${payload.locationFrom.split('- ')[1].trim()}&toLocation=${payload.locationTo.split('- ')[1].trim()}&travelDate=${payload.depdate}`).subscribe((data: any) => {
      this.searchResults = data.flightTravelDetails;
      const dataToSave = {
        searchResults: this.searchResults,
        formDetails: formValue.value
      };
      this.httpService.setFlightData(dataToSave);
    });

  }

}
