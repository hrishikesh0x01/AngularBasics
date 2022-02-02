import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormBasicsComponent } from './reactive-form-basics.component';

describe('ReactiveFormBasicsComponent', () => {
  let component: ReactiveFormBasicsComponent;
  let fixture: ComponentFixture<ReactiveFormBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
