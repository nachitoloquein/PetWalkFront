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

<<<<<<< HEAD
  RecargaCoinsIdConsumidor(idConsumidor){
    return this.http.put(`${this.URL_API}/CargarCoinsIdConsumidor/${idConsumidor}`, {'monto': '8'})
=======
  cargarBilletera(idConsumidor){
    return this.http.put(`${this.URL_API}/CargarCoinsIdConsumidor/${idConsumidor}`, {'monto':'400'})
>>>>>>> b1f8ac20eaf0b5a94da82c948e502f7442414e70
  }

}
