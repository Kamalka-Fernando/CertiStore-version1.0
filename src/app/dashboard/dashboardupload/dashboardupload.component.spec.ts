import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarduploadComponent } from './dashboardupload.component';

describe('DashboarduploadComponent', () => {
  let component: DashboarduploadComponent;
  let fixture: ComponentFixture<DashboarduploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboarduploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarduploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
