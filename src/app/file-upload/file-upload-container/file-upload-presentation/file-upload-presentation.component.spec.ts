import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadPresentationComponent } from './file-upload-presentation.component';

describe('FileUploadPresentationComponent', () => {
  let component: FileUploadPresentationComponent;
  let fixture: ComponentFixture<FileUploadPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
