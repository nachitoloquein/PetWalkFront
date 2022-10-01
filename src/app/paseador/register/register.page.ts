import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { AlertController, IonThumbnail } from '@ionic/angular';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ComunasService } from 'src/app/services/comunas.service';
import { identity } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  pass2 : String;
  antecedentes: File; 
  fotoDelantera: File;
  fotoTrasera: File;



  constructor(
    private alertController: AlertController, 
    public trabajadorService: TrabajadorService,
    public comunaService: ComunasService) {
      this.getComunas();
    }

  ngOnInit(): void {
      
  }
  

  //OBTENER COMUNAS
  getComunas(){
    this.comunaService.listarComunas().subscribe(
      res => {
        this.comunaService.comunas = res;
      },
      err => console.log(err)
    );
  }
  // FIN OBTENER COMUNAS


  //OBTENER ANTECEDENTES
  subirAntecedentes(event){
    if (event.target.files && event.target.files[0]) {
      this.antecedentes = (<File>event.target.files[0]);

      console.log(this.antecedentes);  
    }
  }

  subirFotoDelantera(event){
    if (event.target.files && event.target.files[0]) {
      this.fotoDelantera = (<File>event.target.files[0]);
      console.log(this.fotoDelantera);  
    }
  }

  subirFotoTrasera(event){
    if (event.target.files && event.target.files[0]) {
      this.fotoTrasera = (<File>event.target.files[0]);
      console.log(this.fotoTrasera);  
    }
  }
  // FIN OBTENER ANTECEDENTES


  // ALERTAS

  async presentAlert() {
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
      message: 'Debe llenar todos los campos correctamente antes de enviar su solicitud',
      buttons: ['OK']
    })
    await alert.present()
  }

  async ErrorEdad(){
    const alert = await this.alertController.create({
      header: 'Es Menor de edad',
      message: 'Para crear una cuenta debes ser mayor de edad',
      buttons: ['OK']
    })
    await alert.present()
  }


  async ErrorContrasenas(){
    const alert = await this.alertController.create({
      header:'Contraseñas Invalidas',
      message: 'Las contraseñas deben ser iguales',
      buttons: ['OK']
    })
    await alert.present()
  }

  async GmailExistente(){
    const alert = await this.alertController.create({
      header:'Correo Electronico Existente',
      message: 'El correo que ha ingresado ya esta registrado',
      buttons: ['OK']
    })
    await alert.present()
  }
  // FIN ALERTAS


  //agrega los registros del paseador y revuelve un mensaje de enviado o no envido, ademas de su validacion de campos vacios
  addRegistro(form: NgForm){ 
    try{
      if(this.edadValidation(Number(this.trabajadorService.selectedTrabajador.fechaNacimiento.substring(0,4)), 2022) == true){ 
        if(this.Comparar()== true){
          this.trabajadorService.crearSolicitud(form.value, this.antecedentes, this.fotoDelantera, this.fotoTrasera).subscribe(
        res =>{
         console.log(res);
         if(form.valid && (this.antecedentes && this.fotoDelantera && this.fotoTrasera)){
          this.presentAlert();
          form.onReset()
        }else{
          this.RequiredDataAlert()
        }

      },
      err =>{console.log(err)
        this.ValidacionesEstados(err);
      } 
    );
    return false;
      }
    }
      
      
  }
  catch(err){
    alert(err)
  }
  }
  //FIN AGREGAR REGISTRO TRABAJADOR


  //VALIDACIONES
  Comparar(){
    if(this.trabajadorService.selectedTrabajador.contrasena == this.pass2){
      return true;

    }else{
      this.ErrorContrasenas();
      return false
    }

  }

  edadValidation(anioTrabajador, anioActual){

    const calculo = (anioActual - anioTrabajador)
    if(calculo <= 18){
      this.ErrorEdad();
      return false;
    }else{
      console.log('es mayor')
      return true;
    }
  }

  ValidacionesEstados(err){
    if(err.status == 409){
      this.GmailExistente();
    }    
  }

  
}
    // FIN VALIDACIONES