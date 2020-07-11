import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScreenScheduleComponent } from './add-screen-schedule.component';

describe('AddScreenScheduleComponent', () => {
  let component: AddScreenScheduleComponent;
  let fixture: ComponentFixture<AddScreenScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScreenScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScreenScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
