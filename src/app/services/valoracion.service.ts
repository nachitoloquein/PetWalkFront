import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dominio } from '../conexion';


@Injectable({
  providedIn: 'root'
})
export class ValoracionService {

  URL_API = `${dominio}/api/valoracion`
  constructor(private http: HttpClient) { }

  obtenerValoracionTrabajador(idTrabajador){
    return this.http.get(`${this.URL_API}/${idTrabajador}`);
  }

  valorarTrabajador(calificacion, idTrabajador){
    return this.http.post(`${this.URL_API}/`, {calificacion, idTrabajador});
  }

}
