import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class EmpleadosListComponent implements OnInit {

  empleados: Array<Empleado> = [];
  constructor(private empleadoService:EmpleadosService) { }

  ngOnInit() {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this.empleadoService.obtenerEmpleado().subscribe(
      ems =>{
        this.empleados=ems;
      }
    )
  }

}
