import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private feedbackUrl = 'https://jsonplaceholder.typicode.com/users/1/posts';

  constructor(private http: HttpClient) { }

  sendMessage(user: any) {
    return this.http.post<any>(this.feedbackUrl, user);
  }
}
