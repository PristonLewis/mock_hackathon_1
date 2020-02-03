import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }
  public register(formValue): void {
    console.log('formValue', formValue.value);
    this.httpService.post('users/register', formValue.value).subscribe((data) => {
      console.log('data', data);
    });
  }

}
