import { TestBed } from '@angular/core/testing';

import { SeatsArrangementService } from './seats-arrangement.service';

describe('SeatsArrangementService', () => {
  let service: SeatsArrangementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatsArrangementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
