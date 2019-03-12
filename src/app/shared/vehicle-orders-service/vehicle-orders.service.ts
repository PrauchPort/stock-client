import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleOrdersService {

  constructor(private http: HttpClient) { }

  getAllVehicleOrders(): Observable<any> {
    return this.http.get('http://localhost:8080/api/vehicleorders/');
  }

  getOrderById(id: string) {
    return this.http.get('http://localhost:8080/api/vehicleorders/'+id);
  }

  createVehicleOrder(vehicleOrder): Observable<any> {
    return this.http.post('http://localhost:8080/api/vehicleorders/', vehicleOrder);
  }

  deleteVehicleOrder(id: string) {
    return this.http.delete('http://localhost:8080/api/vehicleorders/'+id);
  }
}
