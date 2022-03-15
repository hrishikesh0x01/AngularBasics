import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVPPracticeComponent } from './mvp-practice.component';

describe('MVPPracticeComponent', () => {
  let component: MVPPracticeComponent;
  let fixture: ComponentFixture<MVPPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MVPPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MVPPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
