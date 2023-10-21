import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosComponent } from './vehiculos.component';

import { VehiculosListComponent } from './vehiculos-list/vehiculos-list.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehiculosComponent, VehiculosListComponent],
  exports:[VehiculosListComponent]
})
export class VehiculosModule { }
