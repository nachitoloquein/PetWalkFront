import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ComunasService } from 'src/app/services/comunas.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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

  async SubmitAlert() {
    const alert = await this.alertController.create({
      header: 'Solicitud Enviada',
      subHeader: '',
      message: 'su solicitud esta siendo revisada,esto puede tardar 2 dias habiles',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async RequiredDataAlert(){
    const alert = await this.alertController.create({
      header: 'Faltan Datos',
      message: 'Debe llenar todos los campos antes de enviar su solicitud',
      buttons: ['OK']
    })
    await alert.present()
  }

  ngOnInit() {
  }

  //agrega los registros del paseador y revuelve un mensaje de enviado o no envido, ademas de su validacion de campos vacios
  addRegistro(form: NgForm){
    try{
    this.trabajadorService.crearSolicitud(form.value).subscribe(
      res => {
        console.log(res);
        if(form.valid){
          this.SubmitAlert();
          this.limpiarLogin(form)
        }else{
          this.RequiredDataAlert()
        }
      },
      err => { 
        console.log(err)}
    )
  }
  catch(err){
    alert(err)
  }
  }

  // Resetear los datos al momento de realizar el submit
  limpiarLogin(form:NgForm){
    form.onReset()
  }
  //Valida los registros de















}

