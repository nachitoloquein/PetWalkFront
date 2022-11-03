import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reporte } from '../model/reporte';
import { dominio } from '../conexion';

@Injectable({
  providedIn: 'root'
})

export class ReportesService {

URL_API = `${dominio}/api/reporte`

  constructor(private http: HttpClient) { }

  reportarTrabajador(idTrabajador, idConsumidor, descripcion){
    return this.http.post(`${this.URL_API}/trabajador`, {idTrabajador, idConsumidor, descripcion});
  }
}
