import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpService, AuthService, AuthGuardService]
})
export class SharedModule { }
