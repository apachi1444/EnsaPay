import { TestBed } from '@angular/core/testing';

import { BackofficeServiceService } from './backoffice-service.service';

describe('BackofficeServiceService', () => {
  let service: BackofficeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackofficeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
