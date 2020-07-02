import { TestBed } from '@angular/core/testing';

import { DashboarduploadService } from './dashboardupload.service';

describe('DashboarduploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboarduploadService = TestBed.get(DashboarduploadService);
    expect(service).toBeTruthy();
  });
});
