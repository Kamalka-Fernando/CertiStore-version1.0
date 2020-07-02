import { TestBed } from '@angular/core/testing';

import { DashboardshareService } from './dashboardshare.service';

describe('DashboardshareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardshareService = TestBed.get(DashboardshareService);
    expect(service).toBeTruthy();
  });
});
