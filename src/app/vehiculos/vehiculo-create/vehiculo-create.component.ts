import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';

@Component({
  selector: 'app-vehiculo-create',
  templateUrl: './vehiculo-create.component.html',
  styleUrls: ['./vehiculo-create.component.css']
})
export class VehiculoCreateComponent implements OnInit {
  vehiculoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private routerPath: Router,
    private route: ActivatedRoute, private vehiculosService:VehiculosService){}
  

  ngOnInit() {
    this.vehiculoForm = this.formBuilder.group({
      placa: ['', [Validators.required, Validators.minLength(6)]],
      marca: ['', [Validators.required, Validators.minLength(2)]],
      color: ['', [Validators.required, Validators.minLength(1)]],
      modelo: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  crearVehiculo(vehiculo: Vehiculo): void {
    this.vehiculosService.crearVehiculo(vehiculo).subscribe(
      (vehiculoCreado)=> {
        alert('Vehiculo creado con éxito')
        this.vehiculoForm.reset();
      }
    )
  }

}
