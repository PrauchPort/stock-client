import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../shared/vehicle-service/vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  vehicles: Array<any>;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getAllVehicles().subscribe(data => {
      this.vehicles = data;
    })
  }

  deleteVehicle(event, id)
  {
    this.vehicleService.deleteVehicle(id);
  }

}
