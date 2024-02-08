import { TestBed } from '@angular/core/testing';

import { FindSameService } from './find-same.service';

describe('FindSameService', () => {
  let service: FindSameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindSameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
