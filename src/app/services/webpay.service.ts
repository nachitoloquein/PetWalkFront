import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dominio } from '../conexion';

@Injectable({
  providedIn: 'root'
})
export class WebpayService {

  URL_API = `${dominio}/api/webpay`;


  constructor(private http: HttpClient) { }

  generarCompra(costo:number){
    return this.http.post(`${this.URL_API}/create`, {costo});
  }

  ConfirmarPago(){
    return this.http.get(`${this.URL_API}/confirmar`);
  }

}


