import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.page.html',
  styleUrls: ['./cartera.page.scss'],
})
export class CarteraPage implements OnInit {

  idTrabajador : any
  Paseos : any
  contador : any
  ganancias : any

  constructor(
    private matchService : MatchService,
    private trabajadorService : TrabajadorService
  ) {
   
   }

  ngOnInit() {
    this.CarteraTrabajador()
  }

  CarteraTrabajador(){
    this.trabajadorService.ObtenerTrabajadorLogeado().subscribe(
      res =>{
        this.ContPaseos(res['_id'])
      }
    )
    
  }

  ContPaseos(id){
    this.matchService.verHistorialTrabajador(id).subscribe(
      res =>{
        this.Paseos = res
        this.contador = this.Paseos.filter(m => m.estadoTrabajo == 'Finalizado').length 
        this.ganancias = this.contador * 4500
      }
    )
  }

  
}