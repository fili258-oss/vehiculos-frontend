import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VehiculosModule }from './vehiculos/vehiculos.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoCreateComponent } from './vehiculos/vehiculo-create/vehiculo-create.component';
import { VehiculoEditComponent } from './vehiculos/vehiculo-edit/vehiculo-edit.component';
import { PropietariosModule } from './propietarios/propietarios.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoCreateComponent,
    VehiculoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VehiculosModule,
    EmpleadosModule,
    PropietariosModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
