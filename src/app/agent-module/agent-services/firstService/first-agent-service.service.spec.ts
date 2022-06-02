import { TestBed } from '@angular/core/testing';

import { FirstAgentServiceService } from './first-agent-service.service';

describe('FirstAgentServiceService', () => {
  let service: FirstAgentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstAgentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
