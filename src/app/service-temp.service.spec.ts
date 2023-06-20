import { TestBed } from '@angular/core/testing';

import { ServiceTempService } from './service-temp.service';

describe('ServiceTempService', () => {
  let service: ServiceTempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
