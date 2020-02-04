import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private httpService: HttpService, private authService: AuthService, private router: Router, 
    private activatedRoute: ActivatedRoute) { }
  public value: Date;
  public errFlag = false;
  public flightId = undefined;
  ngOnInit() {
    this.activatedRoute.params.subscribe((route: any) => {
      this.flightId = route.id;
    });
  }
  public login(loginForm): void {
    this.errFlag = false;
    console.log(loginForm.value);
    this.httpService.post('users/login', loginForm.value).subscribe((data) => {
      console.log('login', data);
      localStorage.setItem('userid', data.userId);
      localStorage.setItem('username', loginForm.value.uName);
      this.authService.changeAuth(loginForm.value.uName);
      if (this.flightId) {
        this.router.navigate(['/booking/' + this.flightId]);
      } else {
        this.router.navigate(['/']);
      }

    }, (exception) => {
      this.errFlag = true;
      console.log('exception', exception);
    });
  }
}
