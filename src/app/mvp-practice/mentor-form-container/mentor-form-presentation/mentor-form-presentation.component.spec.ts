import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorFormPresentationComponent } from './mentor-form-presentation.component';

describe('MentorFormPresentationComponent', () => {
  let component: MentorFormPresentationComponent;
  let fixture: ComponentFixture<MentorFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
