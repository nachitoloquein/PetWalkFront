import { Component, OnInit } from '@angular/core';
import {ConsumidorService} from '../services/consumidor.service'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.page.html',
  styleUrls: ['./consumidor.page.scss'],
})
export class ConsumidorPage implements OnInit {

  correo: string;
  contrasena: string;

  constructor(
    private alertController : AlertController,
    private consumidorService: ConsumidorService, 
    private router : Router,
  ){}

  ngOnInit() {
    
  }


  login(){
    try{
      
    this.consumidorService.Logear(this.correo, this.contrasena).subscribe(
      
      res=>{
        
        console.log(res);
        localStorage.setItem('token', res['token']);
        this.router.navigate(['/home-consumidor'])
    }, 
      err=>{console.log(err),
        this.ValidarCuenta(err);});
    }catch(error){
      alert(error)
    }
  }

  ValidarCuenta(err){
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
