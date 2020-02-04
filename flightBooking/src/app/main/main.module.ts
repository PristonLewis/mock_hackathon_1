import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { BookingInfoComponent } from './components/booking-info/booking-info.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';



@NgModule({
  declarations: [HomeComponent, SearchResultComponent, BookingInfoComponent, PaymentComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,

  ]
})
export class MainModule { }
