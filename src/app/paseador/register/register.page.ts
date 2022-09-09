import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { AlertController, IonInput, IonSelect } from '@ionic/angular';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ComunasService } from 'src/app/services/comunas.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  antecedentes: File; 
  constructor(private alertController: AlertController, 
    public trabajadorService: TrabajadorService, 
    public comunaService: ComunasService) {
      this.getComunas();
  }

  getComunas(){
    this.comunaService.listarComunas().subscribe(
      res => {
        this.comunaService.comunas = res;
      },
      err => console.log(err)
    );
  }
  
  onPhotoSelected(event){
    if (event.target.files && event.target.files[0]) {
      this.antecedentes = <File>event.target.files[0];
      console.log(this.antecedentes);  
    }
  }

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
    try{
    this.trabajadorService.crearSolicitud(form.value).subscribe(
      res =>{
       console.log(res);
      },
      err => console.log(err)
    );
    return false;
  }
  catch(err){
    alert(err)
  }
  }
}
