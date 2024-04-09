import { TestBed } from '@angular/core/testing';

import { MovieResolveService } from './movie-resolve.service';

describe('MovieResolveService', () => {
  let service: MovieResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
