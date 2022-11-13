import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../services/trabajador.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-paseador',
  templateUrl: './paseador.page.html',
  styleUrls: ['./paseador.page.scss'],
})
export class PaseadorPage implements OnInit {

  correo: string;
  contrasena: string;

  constructor(
    private router : Router,
    private alertController : AlertController,
    public trabajadorService: TrabajadorService){

  }
  ngOnInit() {}

  login(){
    try{
    this.trabajadorService.Logear(this.correo, this.contrasena).subscribe(
      res=> {
        console.log(res);
        sessionStorage.setItem('token', res['token'])
        this.router.navigate(['/tabPaseador/perfilP'])
      },
      err => {
        console.log(err)
        this.ValidarCuenta(err)
      }

    )}
    catch{
      alert('F');
    }
  }

  ValidarCuenta(err){
    if(err.status == 400){
      this.Mensaje('Usuario o Contraseña Incorrecto', '')
    }
    if(err.status == 401){
      this.Mensaje('Usuario o Contraseña Incorrecto', '')
    }
  }

  async Mensaje(headerMensaje: string, bodyMensaje: string){
    const alert = await this.alertController.create({
      header: headerMensaje,
      message: bodyMensaje,
      buttons: ['OK']
    })
    await alert.present();
  }

}
