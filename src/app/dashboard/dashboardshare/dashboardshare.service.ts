import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardshareComponent } from './dashboardshare.component';
@Injectable({
  providedIn: 'root'
})
export class DashboardshareService {

  private shareUrl = 'https://jsonplaceholder.typicode.com/users/1/posts';
  constructor(private http: HttpClient) { }

  shareCertificate(user: any) {
    return this.http.post<any>(this.shareUrl, user);
  }
}
