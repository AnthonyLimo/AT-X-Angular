import { TestBed } from '@angular/core/testing';

import { AtService } from './at.service';

describe('AtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtService = TestBed.get(AtService);
    expect(service).toBeTruthy();
  });
});
