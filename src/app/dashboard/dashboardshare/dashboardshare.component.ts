import { Component, OnInit } from '@angular/core';
import { DashboardshareService } from './dashboardshare.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboardshare',
  templateUrl: './dashboardshare.component.html',
  styleUrls: ['./dashboardshare.component.css']
})
export class DashboardshareComponent implements OnInit {

  constructor(private share: DashboardshareService) { }

  ngOnInit() {
  }

  shareCertificate() {
    this.share.shareCertificate(HttpClient)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    console.log(HttpClient);
  }
}
