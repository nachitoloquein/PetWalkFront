import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumidorService } from 'src/app/services/consumidor.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  consumidor: any;

  constructor(private router: Router, private consumidorService: ConsumidorService) { 
   
  }

  ngOnInit() {
    this.obtenerDatos();
  }

  LogOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/consumidor']);
  }

  obtenerDatos(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
      res=>{
        this.consumidor = res
      console.log(this.consumidor)}, 
      err => console.log(err));
  }

}
