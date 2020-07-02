import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboarduploadComponent } from './dashboardupload.component';
@Injectable({
  providedIn: 'root'
})
export class DashboarduploadService {

  private uploadUrl = 'https://jsonplaceholder.typicode.com/users/1/posts';

  constructor(private http: HttpClient) { }

  uploadCertificate(user: any) {
    return this.http.post<any>(this.uploadUrl, user);
  }
}
