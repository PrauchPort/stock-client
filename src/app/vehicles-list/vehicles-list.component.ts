import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../shared/vehicle-service/vehicle.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  vehicles: Array<any>;

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit() {
    this.vehicleService.getAllVehicles().subscribe(data => {
      this.vehicles = data;
    })
  }

  deleteVehicle(event, id)
  {
    this.vehicleService.deleteVehicle(id);
  }

  getVehicleDetails(event, id)
  {
    this.router.navigate(['/vehicle-details'], id);
  }

}
