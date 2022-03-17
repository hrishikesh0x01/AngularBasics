import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudWithoutServerComponent } from './crud-without-server.component';

describe('CrudWithoutServerComponent', () => {
  let component: CrudWithoutServerComponent;
  let fixture: ComponentFixture<CrudWithoutServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudWithoutServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudWithoutServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
