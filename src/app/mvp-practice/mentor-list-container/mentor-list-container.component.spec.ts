import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorListContainerComponent } from './mentor-list-container.component';

describe('MentorListContainerComponent', () => {
  let component: MentorListContainerComponent;
  let fixture: ComponentFixture<MentorListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
