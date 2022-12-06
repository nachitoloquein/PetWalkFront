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
    documentos: []
  }

  constructor( private http: HttpClient) { }

  crearSolicitud(trabajador: Trabajador, antecedentes: File, fotoFrontal: File, fotoTrasera: File){
    const fd:any = new FormData();
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
    fd.append('documentosTodos', antecedentes);
    fd.append('documentosTodos', fotoFrontal);
    fd.append('documentosTodos', fotoTrasera);
    return this.http.post(this.URL_API, fd);
  }

  ListarAllTrabajadores(){
    return this.http.get<Trabajador[]>(this.URL_API + '/all')
  }

  Logear(correo: string, contrasena:string){
    return this.http.post(`${this.URL_API}/login`, {correo, contrasena});
  }

  verificarToken(){
    return sessionStorage.getItem('token');
  }

  getTrabajadorId(idTrabajador : string){
    return this.http.get(`${this.URL_API}/perfil/${idTrabajador}`)
  }

  ObtenerTrabajadorLogeado(){
    return this.http.get(`${this.URL_API}/trabajadorConectado`, {headers: {'authorization':this.verificarToken()}})
  }

  recuperarContrasenaTrabajador(correo, contrasenaNueva){
    return this.http.post(`${this.URL_API}/recuperarContrasenaTrabajador`, {correo, contrasenaNueva});
  }

  
}
