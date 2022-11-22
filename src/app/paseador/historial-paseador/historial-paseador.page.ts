import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-historial-paseador',
  templateUrl: './historial-paseador.page.html',
  styleUrls: ['./historial-paseador.page.scss'],
})
export class HistorialPaseadorPage implements OnInit {

  
  fechaActual = Date.now();
  idTrabajador: any
  matches : any

  constructor(
    private matchService : MatchService,
    private trabajadorService : TrabajadorService
  ) {
    this.obtenerDatos();
   }

  ngOnInit() {
  }

  listarHistorial(id){
    this.matchService.verHistorialTrabajador(id).subscribe(
      res=>{
      this.matches = res
    },
      err=>console.log(err)
    )
  }

  obtenerDatos(){
    this.trabajadorService.ObtenerTrabajadorLogeado().subscribe(
      res=>{
        this.idTrabajador = res['_id'];
        this.listarHistorial(this.idTrabajador)}, 
      err => console.log(err));
  }

}
