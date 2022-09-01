import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Solicitud Enviada',
      subHeader: '',
      message: 'su solicitud esta siendo revisada,esto puede tardar 2 dias habiles',
      buttons: ['OK'],
    });

    await alert.present();
  }


  Cdelantero:string;
  Cverificacion:string;
  Fantecedentes:string;

  ngOnInit() {

    this.Cdelantero = 'https://admision.emoderna.cl/wp-content/uploads/2019/10/ci-admision-emmd2.png'
    this.Cverificacion = 'https://images.ctfassets.net/lbl105a14rhd/6FKAUndO6n87uHHnaGEoJT/8a7fc8def4350c65d6cc89d9646db80b/help-experience-id-v2-cropped.svg'
    this.Fantecedentes = 'https://certificadoenlinea.cl/wp-content/uploads/Que-es-el-certificado-de-antecedentes-para-fines-particulares.png'
  }

}
