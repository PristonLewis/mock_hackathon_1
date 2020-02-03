import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/shared/services/http.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  selectDate: Date;
  locations = [];

  constructor(private HttpService: HttpService) { }

  
  ngOnInit() {

    this.HttpService.get('/locations/getLocations').subscribe((data: any)=>{
      console.log(data);
      this.locations = data.locations;
    })  
    
  }

}
