/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehiculosListComponent } from './vehiculos-list.component';
import { HttpClientModule } from '@angular/common/http';//importar 
import { HttpClientTestingModule} from '@angular/common/http/testing';// incluir
import { VehiculosService } from '../vehiculos.service';

import { Vehiculo } from '../vehiculo';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('VehiculosListComponent', () => {
  let component: VehiculosListComponent;
  let fixture: ComponentFixture<VehiculosListComponent>;
  let vehiculosServiceSpy: jasmine.SpyObj<VehiculosService>;//incluir
  let routerSpy: jasmine.SpyObj<Router>;//incluir

  beforeEach(async(() => {
    const spyVehiculosService = jasmine.createSpyObj('VehiculosService', ['obtenerVehiculos']);//incluir
    const spyRouter = jasmine.createSpyObj('Router', ['navigate']);//incluir

    TestBed.configureTestingModule({      
      imports:[HttpClientModule,HttpClientTestingModule],//importar
      declarations: [ VehiculosListComponent ],
      providers: [
        { provide: VehiculosService, useValue: spyVehiculosService}, //incluir
        { provide: Router, useValue: spyRouter},//incluir

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosListComponent);
    component = fixture.componentInstance;
    vehiculosServiceSpy = TestBed.inject(VehiculosService) as jasmine.SpyObj<VehiculosService>;//incluir
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;//incluir

    //incluir
    vehiculosServiceSpy.obtenerVehiculos.and.returnValue(of(
      [
        new Vehiculo(1, 'ABC123', 'Toyota', 'Rojo', '2022', 'image.png'),
        new Vehiculo(2, 'XYZ789', 'Honda', 'Azul', '2021','image.png'),
      ]
    ));

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //incluir
  it('should call obtenerVehiculos on ngOnInit', ()=>{
    component.ngOnInit();
    expect(vehiculosServiceSpy.obtenerVehiculos).toHaveBeenCalled();
  });

  //incluir
  it('should populate vehiculos on obtenerVehiculos', ()=>{
    component.obtenerVehiculos();
    expect(component.vehiculos.length).toBe(2);
  });

  //incluir
  it('should navigate to edit route on onEditarNavigate', ()=>{
    const id = 1;
    component.onEditarNavigate(id);
    expect(routerSpy.navigate).toHaveBeenCalledWith([`/vehiculos/editar/${id}`]);
  });



});
