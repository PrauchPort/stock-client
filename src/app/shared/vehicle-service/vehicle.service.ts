import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<any> {
    return this.http.get('http://localhost:8080/api/vehicles/');
  }

  createVehicle(vehicle): Observable<any> {
    return this.http.post('http://localhost:8080/api/vehicles/', vehicle);
  }

  deleteVehicle(id: string) {
    return this.http.delete('http://localhost:8080/api/vehicles/'+id);
  }

  // getAllLibraries(): Observable<any> {
  //   return this.http.get('http://localhost:8080/api/library/');
  // }

  // getLibrary(id: number): Observable<any> {
  //   return this.http.get('http://localhost:8080/api/library/'+id);
  // }

  // createLibrary(library): Observable<any> {
  //   return this.http.post('http://localhost:8080/api/library/', library);
  // }

  // createBook(book): Observable<any> {
  //   return this.http.post('http://localhost:8080/api/book/'+book.libraryNumber+'/', book);
  // }
}
