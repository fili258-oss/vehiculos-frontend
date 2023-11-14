import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Vehiculo } from '../vehiculo';
import {VehiculosService} from '../vehiculos.service';



@Component({
  selector: 'app-vehiculo-edit',
  templateUrl: './vehiculo-edit.component.html',
  styleUrls: ['./vehiculo-edit.component.css']
})
export class VehiculoEditComponent implements OnInit {
  vehiculoForm!: FormGroup;
  vehiculo:Vehiculo=new Vehiculo(1,'','','','','');
  idVehiculo: string = '';//incluir
  constructor(private formBuilder: FormBuilder,
    private routerPath: Router,
    private route: ActivatedRoute,private vehiculosService:VehiculosService) {
      this.vehiculoForm = this.formBuilder.group({
        placa: [this.vehiculo.placa, [Validators.required]],
        marca: [this.vehiculo.marca, [Validators.required, Validators.minLength(2)]],
        color: [this.vehiculo.color, [Validators.required, Validators.minLength(1)]],
        modelo: [this.vehiculo.modelo, [Validators.required, Validators.minLength(4)]],
        imagen: [this.vehiculo.modelo, [Validators.required, Validators.minLength(4)]]
      });
    }

  ngOnInit() {

    //cambiar
    this.route.queryParams
        .subscribe(params => {
          this.idVehiculo = params['id'];
          this.vehiculosService.obtenerVehiculo(parseInt(this.idVehiculo)).subscribe((ve)=>{
            this.vehiculo=ve;
            console.log(this.vehiculo);
                
            this.initForm();
            
        });
        })

    
  }

  initForm() {
    this.vehiculoForm = this.formBuilder.group({
      placa: [this.vehiculo?.placa || '', [Validators.required]],
      marca: [this.vehiculo?.marca || '', [Validators.required, Validators.minLength(2)]],
      color: [this.vehiculo?.color || '', [Validators.required, Validators.minLength(1)]],
      modelo: [this.vehiculo?.modelo || '', [Validators.required, Validators.minLength(4)]]
    });
  }

 
  actualizarVehiculo(vehiculo: Vehiculo): void {
    this.vehiculosService.editarVehiculo(vehiculo,this.vehiculo.id).subscribe((vehi)=>{
      alert('registro actualizado con èxito');
    });
    
  }

}



