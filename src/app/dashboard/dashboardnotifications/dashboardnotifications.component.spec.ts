import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardnotificationsComponent } from './dashboardnotifications.component';

describe('DashboardnotificationsComponent', () => {
  let component: DashboardnotificationsComponent;
  let fixture: ComponentFixture<DashboardnotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardnotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
