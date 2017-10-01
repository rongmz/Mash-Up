import { TestBed, inject } from '@angular/core/testing';

import { ActiveViewService } from './active-view.service';

describe('ActiveViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveViewService]
    });
  });

  it('should be created', inject([ActiveViewService], (service: ActiveViewService) => {
    expect(service).toBeTruthy();
  }));
});
