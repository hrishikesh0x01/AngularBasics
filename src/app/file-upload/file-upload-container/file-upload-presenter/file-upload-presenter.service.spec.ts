import { TestBed } from '@angular/core/testing';

import { FileUploadPresenterService } from './file-upload-presenter.service';

describe('FileUploadPresenterService', () => {
  let service: FileUploadPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploadPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
