import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

constructor(private http:HttpClient) { }

  obtenerVehiculos():Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>('http://127.0.0.1:8000/api/gestion-vehiculos/vehiculos');
    
}

}
