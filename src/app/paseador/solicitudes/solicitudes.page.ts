import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  idTrabajador : any;
  constructor(
    private trabajadorService : TrabajadorService,
    private matchService : MatchService,
  ) {
    this.ObtenerDatosTrabajador()
  }

  ngOnInit() {
    this.ObtenerDatosTrabajador();
  }

  ObtenerDatosTrabajador(){
    this.trabajadorService.ObtenerTrabajadorLogeado().subscribe(
      res => {
        this.idTrabajador = res
        console.log(this.idTrabajador)
    },err => {
      console.log(err)
    }
    )
    
  }

  MatchTrabajador(id : string){
    this.matchService.verMatchTrabajador(id).subscribe(
      res => {
        console.log(res)
      },
      err =>{
        console.log(err)
      }

    )
  }


}
