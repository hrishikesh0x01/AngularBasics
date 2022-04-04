import { TestBed } from '@angular/core/testing';

import { FileListPresenterService } from './file-list-presenter.service';

describe('FileListPresenterService', () => {
  let service: FileListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
