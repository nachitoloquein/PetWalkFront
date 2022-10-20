import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../services/trabajador.service';



@Component({
  selector: 'app-paseador',
  templateUrl: './paseador.page.html',
  styleUrls: ['./paseador.page.scss'],
})
export class PaseadorPage implements OnInit {

  correo: string;
  contrasena: string;

  constructor(public trabajadorService: TrabajadorService){

  }
  ngOnInit() {}

  login(){
    try{
    this.trabajadorService.Logear(this.correo, this.contrasena).subscribe(res=> {
      console.log(res);
      sessionStorage.setItem('token', res['token'])}, 
      err=> console.log(err));
    }
    catch{
      alert('F');
    }
  }

}
