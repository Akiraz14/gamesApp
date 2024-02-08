import { TestBed } from '@angular/core/testing';

import { DifficultyValidator } from './difficulty.validator';

describe('DifficultyValidator', () => {
  let service: DifficultyValidator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DifficultyValidator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
