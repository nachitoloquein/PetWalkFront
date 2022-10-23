import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/model/trabajador';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  constructor(
    private router : Router, 
    public obtenerTrabajadores : TrabajadorService,
    public SeleccionarTrabajador : TrabajadorService) {
    this.listarTrabajadores();
   }

  ngOnInit() {
  }

  listarTrabajadores(){
    this.obtenerTrabajadores.ListarAllTrabajadores().subscribe(
      res => {
        console.log(res)
        this.obtenerTrabajadores.Trabajadores = res 
      },
      err => {
        console.log(err )

      }
    )
  }

  Seleccionar(Item : Trabajador){
    let link = ['/buscar/', Item._id];
    this.router.navigate(link)
  }

}
