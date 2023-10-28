import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})

export class EmpleadosService {

constructor(private http:HttpClient) {}

  obtenerEmpleado():Observable<Empleado[]>{
    return this.http.get<Empleado[]>('http://127.0.0.1:8000/api/gestion-empleados/listar/empleados');
    
  }
  
}


