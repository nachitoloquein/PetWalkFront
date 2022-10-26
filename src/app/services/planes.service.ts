import { Injectable } from '@angular/core';
import { plan } from '../model/planes';
import { HttpClient } from '@angular/common/http';
import { dominio } from '../conexion';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  URL_API = `${dominio}/api/plan`;

  planes : plan[]

  constructor(private http : HttpClient) { }

  ListarAllPlanes(){
    return this.http.get<plan[]>(this.URL_API)
  }
}
