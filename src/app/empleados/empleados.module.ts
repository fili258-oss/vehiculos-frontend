import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados.component';

import { EmpleadosListComponent } from './empleados-list/empleados-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmpleadosComponent, EmpleadosListComponent],
  exports:[EmpleadosListComponent]
})
export class EmpleadosModule { }
