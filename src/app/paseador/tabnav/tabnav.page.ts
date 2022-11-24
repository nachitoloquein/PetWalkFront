import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Trabajador } from 'src/app/model/trabajador';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-tabnav',
  templateUrl: './tabnav.page.html',
  styleUrls: ['./tabnav.page.scss'],
})
export class TabnavPage implements OnInit {

  contador : any
  total : any

  constructor(
    private trabajadorService : TrabajadorService,
    private matchService: MatchService
  ) {
    this.Trabajador();
   }

  ngOnInit() {
  }

  Trabajador(){
    this.trabajadorService.ObtenerTrabajadorLogeado().subscribe(
      res => {
      this.ContadorMatch(res['_id'])}
      
    )
  }

  ContadorMatch(id){
    this.matchService.verMatchTrabajador(id).subscribe(
      res => {
        this.contador = res,
        this.total = this.contador.filter(m => m.estadoTrabajo == 'Pendiente').length
      }
    )
  }

}