import { Injectable } from '@angular/core';
import { Trabajador } from '../model/trabajador';
import { HttpClient } from '@angular/common/http';
import { dominio } from '../conexion';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  URL_API = `${dominio}/api/trabajador`;

  selectedTrabajador : Trabajador ={
    nombre : '',
    apellido: '',
    comuna: '',
    genero: '',
    telefono: '',
    correo: '',
    contrasena: '',
    rut: '',
    direccion: '',
    fechaNacimiento: ''
  }

  constructor( private http: HttpClient) { }

  crearSolicitud(trabajador: Trabajador){
    return this.http.post(this.URL_API, trabajador);
  }


}
