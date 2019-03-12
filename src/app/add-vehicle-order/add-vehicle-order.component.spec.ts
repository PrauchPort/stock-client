import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleOrderComponent } from './add-vehicle-order.component';

describe('AddVehicleOrderComponent', () => {
  let component: AddVehicleOrderComponent;
  let fixture: ComponentFixture<AddVehicleOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
