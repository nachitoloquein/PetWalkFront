import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private alertController: AlertController, public trabajadorService: TrabajadorService) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Solicitud Enviada',
      subHeader: '',
      message: 'su solicitud esta siendo revisada,esto puede tardar 2 dias habiles',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

  addRegistro(form: NgForm){
    this.trabajadorService.crearSolicitud(form.value).subscribe(
      res =>
       console.log(res),
      err => console.log(err)
    )
  }

}
