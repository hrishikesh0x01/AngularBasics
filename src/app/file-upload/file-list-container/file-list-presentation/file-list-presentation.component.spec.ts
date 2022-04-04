import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileListPresentationComponent } from './file-list-presentation.component';

describe('FileListPresentationComponent', () => {
  let component: FileListPresentationComponent;
  let fixture: ComponentFixture<FileListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
