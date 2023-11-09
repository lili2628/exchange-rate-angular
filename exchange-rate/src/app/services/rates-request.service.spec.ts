import { TestBed } from '@angular/core/testing';

import { RatesRequestService } from './rates-request.service';

describe('RatesRequestService', () => {
  let service: RatesRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatesRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
