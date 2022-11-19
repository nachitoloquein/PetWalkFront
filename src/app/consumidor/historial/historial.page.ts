import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  fechaActual = Date.now();
  idConsumidor : any
  matches : any
  finalizado : any
  cancelado : any

  constructor(
    private matchService : MatchService,
    private consumidorService : ConsumidorService,
  ) { }

  ngOnInit() {
    this.VerConsumidor();
  }

  VerConsumidor(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
      res => {
        this.HistorialMatch(res['_id'])
      },err => {console.log(err)}
    )
  }

  HistorialMatch(id){
    this.matchService.verMatchConsumidor(id).subscribe(
      res => {
        this.matches = res
        this.finalizado = this.matches.filter(m => m.estadoTrabajo == "Finalizado")
        this.cancelado = this.matches.filter(m => m.estadoTrabajo == "Cancelado")
      }, err => {console.log(err)} 
    )
  }
}
