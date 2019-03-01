import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../_models/vehicle';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleService } from '../shared/vehicle-service/vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  vehicle: Object;
  id: string;

  constructor(private router: ActivatedRoute, private vehicleService: VehicleService) {
  
    this.id = this.router.snapshot.params['id'];
    
  }

  ngOnInit() {
    this.vehicleService.getVehicleById(this.id).subscribe( data =>
      {
        console.log(data);
        this.vehicle = data;
      });
  }

}
