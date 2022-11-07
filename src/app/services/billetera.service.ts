import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Billetera } from '../model/billetera';
import { dominio } from '../conexion';


@Injectable({
  providedIn: 'root'
})
export class BilleteraService {

  URL_API =  `${dominio}/api/billetera` ;

  constructor(private http: HttpClient) { }

  obtenerMonto(idConsumidor){
    return this.http.get(`${this.URL_API}/${idConsumidor}`);
  }

  cargarBilletera(idConsumidor, monto){
    return this.http.put(`${this.URL_API}/CargarCoinsIdConsumidor/${idConsumidor}`, {monto})
  }

}
