import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgCardProfileComponent } from './org-card-profile.component';

describe('OrgCardProfileComponent', () => {
  let component: OrgCardProfileComponent;
  let fixture: ComponentFixture<OrgCardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgCardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgCardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
