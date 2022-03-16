import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorListPresentationComponent } from './mentor-list-presentation.component';

describe('MentorListPresentationComponent', () => {
  let component: MentorListPresentationComponent;
  let fixture: ComponentFixture<MentorListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
