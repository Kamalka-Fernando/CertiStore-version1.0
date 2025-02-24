import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSigninComponent } from './org-signin.component';

describe('OrgSigninComponent', () => {
  let component: OrgSigninComponent;
  let fixture: ComponentFixture<OrgSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
