import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comuna } from '../model/comuna';
import { dominio } from '../conexion';

@Injectable({
  providedIn: 'root'
})
export class ComunasService {

 URL_API =  `${dominio}/api/comuna` ;

  comunas: Comuna[];

  constructor(private http: HttpClient) {
   }

   listarComunas(){
    return this.http.get<Comuna[]>(this.URL_API);
   }
}
