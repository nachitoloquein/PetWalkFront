import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-perfil-paseador',
  templateUrl: './perfil-paseador.page.html',
  styleUrls: ['./perfil-paseador.page.scss'],
})
export class PerfilPaseadorPage implements OnInit {

  trabajador : any;

  constructor(
    private trabajadorService : TrabajadorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.obtenerDatos();
  }

  LogOut(){
    sessionStorage.removeItem('token')
    this.router.navigate(['loginPaseador'])
  }

  obtenerDatos(){
    this.trabajadorService.ObtenerTrabajadorLogeado().subscribe(
      res=>{
        this.trabajador = res}, 
      err => console.log(err));
  }

}
