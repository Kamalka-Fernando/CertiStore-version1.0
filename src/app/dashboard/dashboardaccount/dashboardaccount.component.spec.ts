import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardaccountComponent } from './dashboardaccount.component';

describe('DashboardaccountComponent', () => {
  let component: DashboardaccountComponent;
  let fixture: ComponentFixture<DashboardaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
