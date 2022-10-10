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


  //agrega los registros del paseador y revuelve un mensaje de enviado o no envido, ademas de su validacion de campos vacios
  addRegistro(form: NgForm){
    try {
      if(!this.ValidacionEmail()){
        this.ErrorValidacionEmail();
        return false;
      }
      if(!this.Comparar()){
        return false
      }
      if(!this.ValidacionLargoContasenas()){
        return false
      }
      if(!this.edadValidation(Number(this.trabajadorService.selectedTrabajador.fechaNacimiento.substring(0,4)), 2022)){
        return false
      }
      if(!this.ValidacionTelefono()){
        return false
      }
      if(!this.ValidarRut()){
        return false
      }
      this.trabajadorService.crearSolicitud(form.value, this.antecedentes, this.fotoDelantera, this.fotoTrasera).subscribe(
        res =>{
          console.log(res);
          if(form.valid && (this.antecedentes && this.fotoDelantera && this.fotoTrasera)){
            this.presentAlert();
            form.onReset();
          }else{
            this.RequiredDataAlert()
          }
          
        },
        err => {
          console.log(err)
          this.ValidacionesEstados(err)
        } 
      )
      
    } catch (error) {
      console.log(error);
      
    }

  }






  //  try{
  //    if(this.edadValidation(Number(this.trabajadorService.selectedTrabajador.fechaNacimiento.substring(0,4)), 2022) == true){ 
  //      if(this.Comparar()== true){
  //        this.trabajadorService.crearSolicitud(form.value, this.antecedentes, this.fotoDelantera, this.fotoTrasera).subscribe(
  //      res =>{
  //       console.log(res);
  //       if(form.valid && (this.antecedentes && this.fotoDelantera && this.fotoTrasera)){
  //        this.presentAlert();
  //        form.onReset()
  //      }else{
  //        this.RequiredDataAlert()
  //      }
  //
  //    },
  //    err =>{console.log(err)
  //      this.ValidacionesEstados(err);
  //    } 
  //  );
  //  return false;
  //    }
  //  }
  //    
  //    
  //}catch(err){
  //  alert(err)
  //}
  //}

  //FIN AGREGAR REGISTRO TRABAJADOR

  

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


  //VALIDACIONES
  Comparar(){
    if(this.trabajadorService.selectedTrabajador.contrasena == this.pass2){
      return true;

    }else{
      this.ErrorContrasenas();
      return false
    }

  }

  ValidacionLargoContasenas(){
    const largoContraseñas = this.trabajadorService.selectedTrabajador.contrasena.toString()
    const largoPass2 = this.pass2.toString()
    if(largoContraseñas.length == 6 && largoPass2.length == 6){
      return true
    }else{
      this.ErrorLargoContrasenas();
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

  ValidacionEmail(){
    let email = this.trabajadorService.selectedTrabajador.correo
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  }

  ValidacionTelefono(){
    var Telefono = this.trabajadorService.selectedTrabajador.telefono.toString()
    if( Telefono.length == 9 ){
      return true
      
    }else{
      this.ErrorTelefono();
      return false
    }
  }

  ValidarRut(){
    var rut = this.trabajadorService.selectedTrabajador.rut;
    if(!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut) ){
      this.ErrorRut();
      return false
    }else{
      return true
    }
    

  }

  // FIN VALIDACIONES


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

  async ErrorLargoContrasenas(){
    const alert = await this.alertController.create({
      header:'Error de Contraseñas',
      message: 'La contraseña debe tener 6 caracteres',
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

  async ErrorValidacionEmail(){
    const alert = await this.alertController.create({
      header: 'Formato de Email Incorrecto',
      message: 'El formato del Email debe ser correo@correo.com',
      buttons: ['OK']
    })
    await alert.present()
  }

  async ErrorTelefono(){
    const alert = await this.alertController.create({
      header:'Formato Telefono Incorrecto',
      message: 'El numero de telefono debe tener 9 numeros',
      buttons: ['OK']
    })
    await alert.present()
  }

  async ErrorRut(){
    const alert = await this.alertController.create({
      header:'Formato Rut Incorrecto',
      message: 'El formato de rut debe ser 111111111-1(k)',
      buttons: ['OK']
    })
    await alert.present()
  }


  // FIN ALERTAS
}
    


  