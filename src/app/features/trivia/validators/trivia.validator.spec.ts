import { TestBed } from '@angular/core/testing';

import { TriviaValidator } from './trivia.validator';

describe('TriviaValidator', () => {
  let service: TriviaValidator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriviaValidator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
