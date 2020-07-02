import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './feedback.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private feedback: FeedbackService) { }
  feedbackData = {
    email: {},
    feedback: {}
  }
  ngOnInit() {
  }
  sendMessage(){
    this.feedback.sendMessage(this.feedbackData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    console.log(this.feedbackData);
  }

}
