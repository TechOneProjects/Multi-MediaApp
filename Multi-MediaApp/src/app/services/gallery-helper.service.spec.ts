import { TestBed } from '@angular/core/testing';

import { GalleryHelperService } from './gallery-helper.service';

describe('GalleryHelperService', () => {
  let service: GalleryHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
