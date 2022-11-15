import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dominio } from '../conexion';


@Injectable({
  providedIn: 'root'
})
export class BoletaService {
  URL_API =  `${dominio}/api/boleta` ;
  constructor(private http: HttpClient) { }

  generarBoleta(idConsumidor, cantidadCoins, totalPagado, fechaCompra){
    return this.http.post(this.URL_API, {idConsumidor, cantidadCoins, totalPagado, fechaCompra});
  }

}
