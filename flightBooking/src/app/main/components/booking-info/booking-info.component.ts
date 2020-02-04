import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.sass']
})
export class BookingInfoComponent implements OnInit {

  public flightDataInd;
  public formDetails;
  public numbers;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) {
      
   }
  

  ngOnInit() {
    const flightData = this.httpService.getFlightData();
    this.formDetails = flightData.formDetails;
    // console.log("priston", this.formDetails.upassenger);
    // this.numbers = new Array(this.formDetails.upassenger);
    // for(let i = 1; i < this.formDetails.upassenger + 1; i++) {
    //   this.numbers.push(i);
    // }
    console.log(this.numbers);
    this.activatedRoute.params.subscribe((route: any) => {
      this.flightDataInd = flightData.searchResults.filter((data) => {
          console.log(route.id);
          console.log(data.flightId);
          return data.flightId.toString() === route.id.toString();
      });
    });

  }

}
