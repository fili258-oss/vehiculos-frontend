import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehiculoEditComponent } from './vehiculo-edit.component';
import { HttpClientModule } from '@angular/common/http'; //importar
import { HttpClientTestingModule } from "@angular/common/http/testing";//incluir
import { ReactiveFormsModule } from '@angular/forms'; //importar
import { FormBuilder } from '@angular/forms';//incluir
import { of } from 'rxjs'; //incluir
import { ActivatedRoute } from '@angular/router'; //incluir
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo';

describe('VehiculoEditComponent', () => {
  let component: VehiculoEditComponent;
  let fixture: ComponentFixture<VehiculoEditComponent>;
  let formBuilder: FormBuilder;//incluir
  let activatedRoute: ActivatedRoute;//incluir
  let vehiculosServiceSpy: jasmine.SpyObj<VehiculosService>;


  beforeEach(async(() => {
    const spyVehiculosService = jasmine.createSpyObj('VehiculosService', ['obtenerVehiculo', 'editarVehiculo']);

    TestBed.configureTestingModule({
      imports:[HttpClientModule,ReactiveFormsModule,HttpClientTestingModule],//importar
      declarations: [ VehiculoEditComponent ],
      providers:[
        FormBuilder,//incluir
        { provide: VehiculosService, useValue: spyVehiculosService },//agregar
        { provide: ActivatedRoute, useValue: { queryParams: of({ id: '1' }) } },//incluir
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoEditComponent);
    component = fixture.componentInstance;
    vehiculosServiceSpy = TestBed.inject(VehiculosService) as jasmine.SpyObj<VehiculosService>;//agregar

    activatedRoute = TestBed.inject(ActivatedRoute);//incluir
    formBuilder = TestBed.inject(FormBuilder);//incluir

    vehiculosServiceSpy.obtenerVehiculo.and.returnValue(of(new Vehiculo(2, 'ABC123', '2022', 'Rojo', 'Toyota', 'image.png')));


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize vehiculoForm with values from the obtained vehiculo', () => {
    component.ngOnInit();
    expect(component.vehiculoForm.value).toEqual({
      placa: 'ABC123',
      marca: 'Toyota',
      color: 'Rojo',
      modelo: '2022',
      imagen: 'image.png'
    });
  });

  it('should call actualizarVehiculo on form submission', () => {
    const vehiculo = { placa: 'DEF456', marca: 'Honda', color: 'Azul', modelo: '2021', imagen: 'image.png' };
    component.vehiculoForm.setValue(vehiculo);
    vehiculosServiceSpy.editarVehiculo.and.returnValue(of({id:2, placa: 'ABC123', marca: 'Toyota', color: 'Rojo', modelo: '2022', imagen:'image.png' }));

    const vehiculoObj=new Vehiculo(
      2,
      vehiculo.placa,
      vehiculo.marca,
      vehiculo.color,
      vehiculo.modelo,
      vehiculo.imagen,
    );

    component.actualizarVehiculo(vehiculoObj);

    expect(vehiculosServiceSpy.editarVehiculo).toHaveBeenCalledWith(vehiculoObj, 2);
  });
});