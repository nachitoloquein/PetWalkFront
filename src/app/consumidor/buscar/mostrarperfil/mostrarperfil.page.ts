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

  trabajador : any;
  edad: number;

  constructor(private route : ActivatedRoute,
    private trabajadorService : TrabajadorService){
      const idTrabajador = this.route.snapshot.params['id']
      this.cargarTrabajador(idTrabajador);
    }

      

  ngOnInit() {
  }


  cargarTrabajador(id: string){
    this.trabajadorService.getTrabajadorId(id).subscribe(
      res=> {this.trabajador = res;
      console.log(this.trabajador);}, 
      err=> console.log(err));
  }

  calcularEdad(){
    const anio = this.trabajador.fechaNacimiento
    console.log(anio);
  }

  


}