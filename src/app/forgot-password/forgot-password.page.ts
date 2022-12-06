import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ConsumidorService } from '../services/consumidor.service';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    private consumidorService : ConsumidorService,
    private trabajadorService: TrabajadorService,
    private alertController: AlertController
  ) { }

  email : any
  contrasena: String;
  confirmarContrasena: String;

  ngOnInit() {
  }

  actualizarContrasena(){
    if(this.contrasena == this.confirmarContrasena){
      this.consumidorService.recuperarContrasenaConsumidor(this.email, this.contrasena).subscribe(
        res=>this.MensajeInfo("Contraseña actualizada", "ahora puede iniciar sesión con su nueva contraseña"),
        err=>{
          if(err.status == 409){
            this.trabajadorService.recuperarContrasenaTrabajador(this.email, this.contrasena).subscribe(
              res=>this.MensajeInfo("Contraseña actualizada", "ahora puede iniciar sesión con su nueva contraseña")            )
          }
          else{
          this.MensajeInfo("Error", "Algo ocurrió, inténtalo de nuevo");
          }
        }
      )
    }else{
      this.MensajeInfo("Error", "Las contraseñas deben ser iguales");
    }
  }

  async MensajeInfo(cabecera: string, contenido: string){
    const alert = await this.alertController.create({
      
      header : cabecera,
      message: contenido,
      buttons: ["Entendido"]

    })
    await alert.present();
  }

}
