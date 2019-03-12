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
        this.vehicle = data;
        document.getElementById("vehicle").style.display = "block";
        document.getElementsByClassName("tablinks")[0].className += " active";
      });

  }

  openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontents, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontents = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
}
