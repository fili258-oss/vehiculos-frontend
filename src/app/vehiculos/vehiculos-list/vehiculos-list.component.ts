import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css']
})
export class VehiculosListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  constructor(private routerPath: Router,private vehiculoService:VehiculosService) { }


  ngOnInit() {
    this.obtenerVehiculos();
  }

  obtenerVehiculos(){
    this.vehiculoService.obtenerVehiculos().subscribe(
      ves =>{
        this.vehiculos=ves;
      }
    )
  }

  onEditarNavigate(id: number) {
    this.routerPath.navigate([`/vehiculos/editar/${id}`]);
  }

}
