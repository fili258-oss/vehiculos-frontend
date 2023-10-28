import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosListComponent } from './vehiculos/vehiculos-list/vehiculos-list.component';
import { EmpleadosListComponent } from './empleados/empleados-list/empleados-list.component';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { VehiculoCreateComponent } from './vehiculos/vehiculo-create/vehiculo-create.component';
import { VehiculoEditComponent } from './vehiculos/vehiculo-edit/vehiculo-edit.component';

const routes: Routes = [
  {
    path:'',
    component:VehiculosListComponent
  },
  {
    path:'empleados',
    component:EmpleadosListComponent
  },
  {
    path:'propietarios',
    component:PropietariosComponent
  },
  {
    path:'vehiculos',
    component:VehiculosListComponent
  },
  {
    path:'newvehiculo',
    component:VehiculoCreateComponent
  },
  {
    path:'vehiculos/editar/:id',
    component:VehiculoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
