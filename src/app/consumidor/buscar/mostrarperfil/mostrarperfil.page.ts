import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajador } from 'src/app/model/trabajador';

@Component({
  selector: 'app-mostrarperfil',
  templateUrl: './mostrarperfil.page.html',
  styleUrls: ['./mostrarperfil.page.scss'],
})
export class MostrarperfilPage implements OnInit {

  trabajador : Trabajador;

  constructor(
    private route : ActivatedRoute,
    private trabajadorService : TrabajadorService){}

      

  ngOnInit() {
    const idTrabajador = this.route.snapshot.params['id']
    this.trabajadorService.getTrabajadorId(idTrabajador).subscribe(
      res => this.trabajador // = res       (aca esta el erro comentado, dice que faltan los demas datos como nombre y apellido, etc)  
    )
    console.log(idTrabajador)
  }

  


}
