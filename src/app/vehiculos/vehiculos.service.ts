import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

const API_URL = 'http://127.0.0.1:8000/api/gestion-vehiculos/'
@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

constructor(private http:HttpClient) { }

  obtenerVehiculos():Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(API_URL+'vehiculos');
    
  }

  crearVehiculo(vehiculo:Vehiculo):Observable<Vehiculo>{
    return this.http.post<Vehiculo>(API_URL+'crear-vehiculos', vehiculo)
  }

  obtenerVehiculo(id:Number):Observable<Vehiculo>{
    return this.http.get<Vehiculo>(API_URL+'consultar/'+id)
  }

  editarVehiculo(vehiculo:Vehiculo, idVehiculo:number):Observable<Vehiculo>{
    return this.http.put<Vehiculo>(API_URL+'vehiculos/'+idVehiculo+'/', vehiculo)
  }

}
