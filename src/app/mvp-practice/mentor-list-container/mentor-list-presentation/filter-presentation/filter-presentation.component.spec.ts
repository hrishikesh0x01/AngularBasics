import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPresentationComponent } from './filter-presentation.component';

describe('FilterPresentationComponent', () => {
  let component: FilterPresentationComponent;
  let fixture: ComponentFixture<FilterPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
