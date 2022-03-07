import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePipesComponent } from './directive-pipes.component';

describe('DirectivePipesComponent', () => {
  let component: DirectivePipesComponent;
  let fixture: ComponentFixture<DirectivePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivePipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
