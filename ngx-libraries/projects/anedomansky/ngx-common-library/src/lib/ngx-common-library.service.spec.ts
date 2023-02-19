import { TestBed } from '@angular/core/testing';

import { NgxCommonLibraryService } from './ngx-common-library.service';

describe('NgxCommonLibraryService', () => {
  let service: NgxCommonLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCommonLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
