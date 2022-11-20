import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatchService } from 'src/app/services/match.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';
=======
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { MatchService } from 'src/app/services/match.service';
>>>>>>> 4aff127be542aaeef2dbfafc0e6ad61a4fbd0385

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss', './../consumidorGlobalStyles.scss'],
})
export class HistorialPage implements OnInit {

  fechaActual = Date.now();
<<<<<<< HEAD
  idConsumidor : any
  matches : any
  finalizado : any
  cancelado : any

  constructor(
    private matchService : MatchService,
    private consumidorService : ConsumidorService,
  ) { }
=======
  idConsumidor: any;
  matches: any;
  constructor(private matchService: MatchService, private consumidorService: ConsumidorService) {
    this.obtenerDatos();
   }
>>>>>>> 4aff127be542aaeef2dbfafc0e6ad61a4fbd0385

  ngOnInit() {
    this.VerConsumidor();
  }

<<<<<<< HEAD
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
=======
  listarHistorial(id){
    this.matchService.verHistorialConsumidor(id).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

  obtenerDatos(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
      res=>{
        this.idConsumidor = res['_id'];
        this.listarHistorial(this.idConsumidor)}, 
      err => console.log(err));
  }

>>>>>>> 4aff127be542aaeef2dbfafc0e6ad61a4fbd0385
}
