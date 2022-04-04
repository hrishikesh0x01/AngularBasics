import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileViewOverlayComponent } from './file-view-overlay.component';

describe('FileViewOverlayComponent', () => {
  let component: FileViewOverlayComponent;
  let fixture: ComponentFixture<FileViewOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileViewOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileViewOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
