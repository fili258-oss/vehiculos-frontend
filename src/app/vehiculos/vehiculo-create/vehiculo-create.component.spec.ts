/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehiculoCreateComponent } from './vehiculo-create.component';//import
import { HttpClientTestingModule} from '@angular/common/http/testing';// incluir
import { Form, ReactiveFormsModule } from '@angular/forms';//incluir
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { VehiculosService } from '../vehiculos.service';
import { of } from 'rxjs';
import { Vehiculo } from '../vehiculo';


describe('VehiculoCreateComponent', () => {
  let component: VehiculoCreateComponent;//incluir
  let fixture: ComponentFixture<VehiculoCreateComponent>;//incluir
  let formBuilder:FormBuilder;// incluir
  let vehiculosServiceSpy: jasmine.SpyObj<VehiculosService>; 


  beforeEach(async(() => {
    const spyVehiculosService = jasmine.createSpyObj('VehiculosService', ['crearVehiculo']);//incluir

    TestBed.configureTestingModule({

      imports: [HttpClientModule,ReactiveFormsModule,HttpClientTestingModule],//importar
      declarations: [ VehiculoCreateComponent],
      providers: [
        FormBuilder,//incluir
        { provide: VehiculosService, useValue: spyVehiculosService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoCreateComponent);
    component = fixture.componentInstance;
    //incluir
    vehiculosServiceSpy = TestBed.inject(VehiculosService) as jasmine.SpyObj<VehiculosService>;
    formBuilder = TestBed.inject(FormBuilder);//incluir
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //agregar
  it('should initialize vehiculoForm with empty values', () => {
    component.ngOnInit();
    expect(component.vehiculoForm.value).toEqual({
      placa: '',
      marca: '',
      color: '',
      modelo: '',
      image: ''
    });
  });

  //agregar
  it('should call crearVehiculo on submit', ()=> {
    const vehiculo = { placa: 'ABC123', marca: 'Toyota', color: 'Rojo', modelo: '2022', imagen: 'imagen.png'};
    component.vehiculoForm.setValue(vehiculo);
    vehiculosServiceSpy.crearVehiculo.and.returnValue(of({id: 1, placa: 'ABC123', marca: 'Toyota', color: 'Rojo', modelo: '2022', imagen: 'imagen.png'}));

    const vehiculoObj=new Vehiculo(
      1,
      'ABC123',
      '2022',
      'Rojo',
      'Toyota',
      'imagen.png');

      component.crearVehiculo(vehiculoObj);

      expect(vehiculosServiceSpy.crearVehiculo).toHaveBeenCalledWith(vehiculoObj);
  })

});
