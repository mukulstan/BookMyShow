import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScheduleStatsComponent } from './movie-schedule-stats.component';

describe('MovieScheduleStatsComponent', () => {
  let component: MovieScheduleStatsComponent;
  let fixture: ComponentFixture<MovieScheduleStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieScheduleStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieScheduleStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
