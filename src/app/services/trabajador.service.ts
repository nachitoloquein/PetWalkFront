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
    fechaNacimiento: '',
    antecedentes: '',
    fotoCarnetFrontal: '',
    fotoCarnetTrasera: ''
  }

  constructor( private http: HttpClient) { }

  /* crearSolicitud(nombre, apellido, comuna, genero, telefono, correo, contrasena, tut, direccion, fechaNacimiento, antecedentes:File){
    const fd = new FormData();
    fd.append('file', antecedentes);
    fd.append('nombre', nombre);
    fd.append('apellido', apellido);
    fd.append('comuna', comuna);
    fd.append('genero', genero);
    fd.append('telefono', telefono);
    fd.append('correo', correo);
    fd.append('contrasena', contrasena);
    fd.append('rut', rut);
    fd.append('direccion', direccion);
    fd.append('fechaNacimiento', fechaNacimiento);
    return this.http.post(this.URL_API, fd);
  } */

  crearSolicitud(trabajador: Trabajador){
    const fd = new FormData();
    fd.append('nombre', trabajador.nombre);
    fd.append('apellido', trabajador.apellido);
    fd.append('comuna', trabajador.comuna);
    fd.append('genero', trabajador.genero);
    fd.append('telefono', trabajador.telefono);
    fd.append('correo', trabajador.correo);
    fd.append('contrasena', trabajador.contrasena);
    fd.append('rut', trabajador.rut);
    fd.append('direccion', trabajador.direccion);
    fd.append('fechaNacimiento', trabajador.fechaNacimiento);
    fd.append('file', trabajador.antecedentes);
    return this.http.post(this.URL_API, trabajador);
  }


}
