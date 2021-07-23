import { TestBed } from '@angular/core/testing';

import { TransformerLocationService } from './transformer-location.service';

describe('TransformerLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransformerLocationService = TestBed.get(TransformerLocationService);
    expect(service).toBeTruthy();
  });
});
