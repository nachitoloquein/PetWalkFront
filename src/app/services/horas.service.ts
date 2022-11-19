import { Injectable } from '@angular/core';
import { dominio } from '../conexion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HorasService {

  URL_API = `${dominio}/api/horario`
  constructor(private http : HttpClient ) { }

  CrearHorario(idTrabajador: string, horaIntervalos){
    return this.http.post(`${this.URL_API}/`,{idTrabajador, horaIntervalos})
    
  }

  EliminarHorario(idHorario){
    return this.http.delete(`${this.URL_API}/${idHorario}`)

  }
  ListarHorasDisponibleTrabajador(idTrabajador){
    return this.http.get(`${this.URL_API}/${idTrabajador}`)
  }

}
