import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss', '../consumidorGlobalStyles.scss']
})
export class BuscarPage implements OnInit {

  filterTerm : string;
  trabajadores = [];
 
  constructor(
    private trabajadorService : TrabajadorService) {
    this.listarTrabajadores();
   
   }

  ngOnInit() {
  
  }

  listarTrabajadores(){
    this.trabajadorService.ListarAllTrabajadores().subscribe(
      res => {
        this.trabajadores = res.filter((m) => m.estado == 'Activo')
        console.log(this.trabajadores);
        
      },
      err => {
        console.log(err)

      }
    )
  }

}
