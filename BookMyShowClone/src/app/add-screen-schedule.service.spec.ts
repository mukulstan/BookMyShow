import { TestBed } from '@angular/core/testing';

import { AddScreenScheduleService } from './add-screen-schedule.service';

describe('AddScreenScheduleService', () => {
  let service: AddScreenScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddScreenScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
