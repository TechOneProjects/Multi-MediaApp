import { TestBed } from '@angular/core/testing';

import { MongoServiceService } from './mongo-service.service';

describe('MongoServiceService', () => {
  let service: MongoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
