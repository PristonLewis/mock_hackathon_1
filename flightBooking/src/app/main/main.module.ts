import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { BookingInfoComponent } from './components/booking-info/booking-info.component';
import { PaymentComponent } from './components/payment/payment.component';



@NgModule({
  declarations: [HomeComponent, SearchResultComponent, BookingInfoComponent, PaymentComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
