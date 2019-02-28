import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from '../shared/vehicle-service/vehicle.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  addVehicleForm: FormGroup;

  constructor(private router: Router, private vehicleService: VehicleService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addVehicleForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      productionYear: ['', Validators.required]
    })
  }

  onSubmit() {
    this.vehicleService.createVehicle(this.addVehicleForm.value).subscribe(data => this.router.navigate(['/vehicles']));
  }

}
