import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardshareComponent } from './dashboardshare.component';

describe('DashboardshareComponent', () => {
  let component: DashboardshareComponent;
  let fixture: ComponentFixture<DashboardshareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardshareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
