import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupService {


  private regUrl = 'http://localhost:4200/api/register';

  constructor( private http: HttpClient) { }

  registerUser(user) {
    console.log('sending data to backend')
    return this.http.post<any>(this.regUrl, user);
    return this.http.get<any>(this.regUrl, user);
  }

}

