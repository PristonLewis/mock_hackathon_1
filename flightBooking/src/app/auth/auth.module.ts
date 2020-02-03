import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule
  ]
})
export class AuthModule { }
