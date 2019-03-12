import { TestBed } from '@angular/core/testing';

import { VehicleOrdersService } from './vehicle-orders.service';

describe('VehicleOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleOrdersService = TestBed.get(VehicleOrdersService);
    expect(service).toBeTruthy();
  });
});
