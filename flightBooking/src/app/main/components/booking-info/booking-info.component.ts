import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.sass']
})
export class BookingInfoComponent implements OnInit {

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) { }
  public flightDataInd;
  public formDetails;
  public numbers = [];
  public flightTravelDetailsId: string;

  @ViewChildren('passengername') passengername: QueryList<ElementRef>;
  @ViewChildren('passengermob') passengermob: QueryList<ElementRef>;

  ngOnInit() {
    const flightData = this.httpService.getFlightData();
    this.formDetails = flightData.formDetails;
    // console.log("priston", this.formDetails.upassenger);
    // this.numbers = new Array(this.formDetails.upassenger);
    console.log(this.formDetails.upassenger)
    for (let i = 1; i < parseInt(this.formDetails.upassenger, 10) + 1; i++) {
       this.numbers.push(i);
     }

    this.activatedRoute.params.subscribe((route: any) => {
      this.flightDataInd = flightData.searchResults.filter((data) => {
          console.log(route.id);
          console.log(data.flightId);
          this.flightTravelDetailsId = route.id;
          return data.flightId.toString() === route.id.toString();
      });
    });



  }

  public payment(): void {
    console.log('childrens', this.passengername);
    console.log('childrens', this.passengermob);
    const name = [];
    const mobile = [];

    const payloadArr: any = [];
    this.passengername.forEach((data) => {
      name.push(data.nativeElement.value);
    });
    this.passengermob.forEach((data) => {
      mobile.push(data.nativeElement.value);
    });
    for (let i = 0; i < name.length; i++) {
        const payloadObj = {
          name: name[i],
          mobile: mobile[i]
        };
        payloadArr.push(payloadObj);
    }
    const finalPayload = {
      userId: localStorage.getItem('userid'),
      flightTravelDetailsId: this.flightTravelDetailsId,
      passengers: payloadArr
    }
    this.httpService.post2('http://10.117.189.47:1989/ticketBooking', finalPayload).subscribe((data) => {
      console.log('daaaa', data);
    });
    console.log('payloadArr', payloadArr);
  }

}
