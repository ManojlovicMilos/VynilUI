import { TestBed } from '@angular/core/testing';

import { VynilUiService } from './vynil-ui.service';

describe('VynilUiService', () => {
  let service: VynilUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VynilUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
