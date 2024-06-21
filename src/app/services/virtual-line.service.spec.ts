import { TestBed } from '@angular/core/testing';

import { VirtualLineService } from './virtual-line.service';

describe('VirtualLineService', () => {
  let service: VirtualLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
