import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }
 
  public getCompleteUrl(endpoint): string {
    const baseUrl = 'http://10.117.189.56:1989/';
    return baseUrl + endpoint;
  }
  public get(endpoint): Observable<any> {
    return this.httpClient.get(this.getCompleteUrl(endpoint));
  }
  public post(endpoint, payload): Observable<any> {
    return this.httpClient.post(this.getCompleteUrl(endpoint), payload);
  }
}
