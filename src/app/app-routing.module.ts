import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosListComponent } from './vehiculos/vehiculos-list/vehiculos-list.component';

const routes: Routes = [
  {
    path:'',
    component:VehiculosListComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
