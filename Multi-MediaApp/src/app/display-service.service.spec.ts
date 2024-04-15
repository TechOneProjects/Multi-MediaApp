import { TestBed } from '@angular/core/testing';

import { DisplayServiceService } from './display-service.service';

describe('DisplayServiceService', () => {
  let service: DisplayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
