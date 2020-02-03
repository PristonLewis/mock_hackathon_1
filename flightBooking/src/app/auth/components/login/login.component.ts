import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  public value: Date;
  ngOnInit() {
  }
  public login(loginForm): void {
    console.log(loginForm.value);
    this.httpService.post('users/login', loginForm.value).subscribe((data) => {
      console.log('login', data);
    }, (exception) => {
      console.log('exception', exception);
    });
  }
}
