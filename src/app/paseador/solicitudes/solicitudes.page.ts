import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  
  id : any;
  matches : any
  consumidores : any

  constructor(
    private consumidorService : ConsumidorService,
    private trabajadorService : TrabajadorService,
    private matchService : MatchService,
  ) {
    this.ObtenerDatosMatch();
  }

  

  ngOnInit() {
    
  }

  ObtenerDatosMatch(){
    this.trabajadorService.ObtenerTrabajadorLogeado().subscribe(
      res => {
        this.id = res['_id']
        this.ObtenerId(this.id);
      },err =>{
        console.log(err)
      }
    )
    
  }

  ObtenerId(idTrabajador){
    this.matchService.verMatchTrabajador(idTrabajador).subscribe(
      res => {
        this.matches = res
        console.log(this.matches)
      },err =>{
        console.log(err)
      }
    )
    
  }
  
  ObtenerDatosConsumidor(idConsumidor){
    this.consumidorService.datosConsumidor(idConsumidor).subscribe(
      res => {
        this.consumidores = res
        console.log(this.consumidores)
      },err =>{
        console.log(err)
      }
    )
  }

}