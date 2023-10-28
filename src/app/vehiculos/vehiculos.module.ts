import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosComponent } from './vehiculos.component';
import { ReactiveFormsModule } from '@angular/forms'
import { VehiculosListComponent } from './vehiculos-list/vehiculos-list.component'

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  declarations: [VehiculosComponent, VehiculosListComponent],
  exports:[VehiculosListComponent]
})
export class VehiculosModule { }
