import { Injectable } from '@angular/core';
import { dominio } from '../conexion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  URL_API = `${dominio}/api/match`
  constructor(private http: HttpClient) { }

  verMatchConsumidor(id: string){
    return this.http.get(`${this.URL_API}/consumidor/${id}`);
  }

  verMatchTrabajador(id: string){
    return this.http.get(`${this.URL_API}/trabajador/${id}`)
  }
 
  hacerMatch(idConsumidor: string, idTrabajador: string, horaTrabajo: string, monto:number){
    return this.http.post(`${this.URL_API}`, {idConsumidor, idTrabajador, horaTrabajo, monto});
  }

}
