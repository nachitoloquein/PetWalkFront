import { Injectable } from '@angular/core';
import { Consumidor } from '../model/consumidor';
import { HttpClient } from '@angular/common/http';
import { dominio } from '../conexion';

@Injectable({
  providedIn: 'root'
})
export class ConsumidorService {
  URL_API = `${dominio}/api/consumidor`;//consumidor

  selectedConsumidor : Consumidor ={
    nombre : '',
    apellido : '',
    comuna : '',
    telefono : '',
    correo : '',
    contrasena : '',
    direccion : '',
    fechaNacimiento : '',
  }

  constructor(private http: HttpClient) {
  }

  crearRegistroConsum(consumidor: Consumidor){ 
    return this.http.post(this.URL_API,consumidor);
  }

  Logear(correo: string, contrasena:string){
    return this.http.post(`${this.URL_API}/login`, {correo, contrasena});
  }
  
  verificarToken(){
    return localStorage.getItem('token');
  }

  obtenerConsumidorLogeado(){
    return this.http.get(`${this.URL_API}/consumidorConectado`, {headers: {'authorization':this.verificarToken()}})
  } 

  datosConsumidor(idConsumidor: string){
    return this.http.get(`${this.URL_API}/perfil/${idConsumidor}`)
  }

}
