import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private logUrl = 'http://localhost:4200/api/login';

  constructor( private http: HttpClient ) { }

  loginUser(user: any) {
    return this.http.post<any>(this.logUrl, user);
    return this.http.get<any>(this.logUrl, user);
  }

}
