import { TestBed, inject } from '@angular/core/testing';

import { SimpleDialogsService } from './simple-dialogs.service';

describe('SimpleDialogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleDialogsService]
    });
  });

  it('should be created', inject([SimpleDialogsService], (service: SimpleDialogsService) => {
    expect(service).toBeTruthy();
  }));
});
