import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss']
})
export class BuscarPage implements OnInit {

  filterTerm : string;
  trabajadores = [];

  constructor(
    public trabajadorService : TrabajadorService) {
    this.listarTrabajadores();
   }

  ngOnInit() {
  }

  listarTrabajadores(){
    this.trabajadorService.ListarAllTrabajadores().subscribe(
      res => {
        this.trabajadores = res.filter((m) => m.estado == 'Activo')
      },
      err => {
        console.log(err)

      }
    )
  }

}
