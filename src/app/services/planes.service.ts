import { Injectable } from '@angular/core';
import { Plan } from '../model/plan';
import { HttpClient } from '@angular/common/http';
import { dominio } from '../conexion';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  URL_API = `${dominio}/api/plan`;

  constructor(private http : HttpClient) { }

  ListarAllPlanes(){
    return this.http.get<Plan[]>(this.URL_API)
  }
}
