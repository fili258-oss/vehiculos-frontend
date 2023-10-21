import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehculo';
import { VehiculosService } from '../vehiculos.service';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css']
})
export class VehiculosListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  constructor(private vehiculoService:VehiculosService) { }


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

}
