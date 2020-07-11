import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScreenScheduleComponent } from './edit-screen-schedule.component';

describe('EditScreenScheduleComponent', () => {
  let component: EditScreenScheduleComponent;
  let fixture: ComponentFixture<EditScreenScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditScreenScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScreenScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
