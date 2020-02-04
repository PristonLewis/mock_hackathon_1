import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/components/home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { BookingInfoComponent } from './main/components/booking-info/booking-info.component';
import { PaymentComponent } from './main/components/payment/payment.component';
import { SearchResultComponent } from './main/components/search-result/search-result.component';
import { AuthGuardService as AuthGuard } from './shared/services/auth-guard.service';

const routes: Routes = [{path: '', component: HomeComponent},
{path: 'login/:id', component: LoginComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'booking/:id', component: BookingInfoComponent, canActivate: [AuthGuard]},
{path: 'payment', component: PaymentComponent, canActivate: [AuthGuard]},
{path: 'results', component: SearchResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
