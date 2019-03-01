import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path : 'home', component: HomeComponent },
  { path : 'logout', component: LogoutComponent},
  { path : 'register', component: RegisterComponent},
  { path: 'vehicles', component: VehiclesListComponent},
  { path: 'add-vehicle', component: AddVehicleComponent},
  { path: 'vehicles/:id', component: VehicleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
