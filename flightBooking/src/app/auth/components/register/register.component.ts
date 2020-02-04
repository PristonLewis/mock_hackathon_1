import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }
  public register(formValue): void {
    this.httpService.post('users/register', formValue.value).subscribe((data) => {
      this.router.navigate(['/login']);
    });
  }

}
