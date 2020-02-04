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
  public value;
  public locations;
  public searchResults;
  public today: number;

  constructor(private httpService: HttpService, private router: Router, private authService: AuthService) { 

      this.value = Date;
      this.locations = [];
      this.searchResults = [];
      this. today = Date.now();
  }
  ngOnInit() {

     /**
      *  Getting datas like source and destination detail about the flight and stored in service 
      */
    this.httpService.get('/locations/getLocations').subscribe((data: any) => {
      this.locations = data.locations;
    });
  }
    /**
     *  if user authorzation is matched navigating to booking page or we are redirecting to login page 
     */
  public navigate(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['booking/1']);
    } else {
      this.router.navigate(['login/1']);
    }
  }

  /**
   * 
   * FlightTravelDetails  
   */
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
