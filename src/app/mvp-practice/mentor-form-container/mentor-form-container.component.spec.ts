import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorFormContainerComponent } from './mentor-form-container.component';

describe('MentorFormContainerComponent', () => {
  let component: MentorFormContainerComponent;
  let fixture: ComponentFixture<MentorFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
