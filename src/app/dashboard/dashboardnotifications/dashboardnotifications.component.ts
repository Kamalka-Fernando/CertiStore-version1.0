import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardnotifications',
  templateUrl: './dashboardnotifications.component.html',
  styleUrls: ['./dashboardnotifications.component.css']
})
export class DashboardnotificationsComponent implements OnInit {
  accountname = 'Team Code Void';
  constructor() { }

  ngOnInit() {
  }

  today: number = Date.now();
}
