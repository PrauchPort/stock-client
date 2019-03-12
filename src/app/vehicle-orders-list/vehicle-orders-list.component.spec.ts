import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleOrdersListComponent } from './vehicle-orders-list.component';

describe('VehicleOrdersListComponent', () => {
  let component: VehicleOrdersListComponent;
  let fixture: ComponentFixture<VehicleOrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleOrdersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
