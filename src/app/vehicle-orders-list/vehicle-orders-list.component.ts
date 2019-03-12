import { Component, OnInit } from '@angular/core';
import { VehicleOrdersService } from '../shared/vehicle-orders-service/vehicle-orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-orders-list',
  templateUrl: './vehicle-orders-list.component.html',
  styleUrls: ['./vehicle-orders-list.component.css']
})
export class VehicleOrdersListComponent implements OnInit {

  vehicleOrders: Array<any>;

  constructor(private vehicleOrdersService: VehicleOrdersService, private router: Router) { }

  ngOnInit() {
    this.vehicleOrdersService.getAllVehicleOrders().subscribe(data => {
      this.vehicleOrders = data;
    })
  }

  deleteVehicle(event, id)
  {
    this.vehicleOrdersService.deleteVehicleOrder(id);
  }

  getVehicleDetails(event, id)
  {
    this.router.navigate(['/vehicle-details'], id);
  }

}
