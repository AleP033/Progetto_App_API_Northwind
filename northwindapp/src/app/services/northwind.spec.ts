import { TestBed } from '@angular/core/testing';

import { Northwind } from './northwind';

describe('Northwind', () => {
  let service: Northwind;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Northwind);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
