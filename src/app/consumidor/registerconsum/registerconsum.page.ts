import { Component, OnInit } from '@angular/core';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { ComunasService } from 'src/app/services/comunas.service';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registerconsum',
  templateUrl: './registerconsum.page.html',
  styleUrls: ['./registerconsum.page.scss'],
})
export class RegisterconsumPage implements OnInit {

  pass2: string;

  constructor(
    private alertController: AlertController,
    public consumidorService: ConsumidorService,
    public comunaService: ComunasService,
  ){
    this.getComunas();
  }

  ngOnInit() {

  }

  // Codigo funcion principal para agregar registrar Consumidor
  addRegistro(form: NgForm){
    try {
      if(!this.comparar() ){
        return false
      }
      if(!this.ValidacionLargoContasenas()){
        return false
      }
      if(!this.edadValidation(Number(this.consumidorService.selectedConsumidor.fechaNacimiento.substring(0,4)), 2022)){
        return false
      }
      if(!this.ValidacionTelefono()){
        return false
      }
      
      this.consumidorService.crearRegistroConsum(form.value).subscribe(
        res => {
          console.log(res)
          this.presentAlert();
          form.onReset();
        },
        err =>{
          console.log(err)
          this.ValidacionesEstados(err);
        }
        
      )
      
    } catch (error) {
      console.log(error)
      
    }
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


  //VALIDACIONES
  comparar(){
   if(this.consumidorService.selectedConsumidor.contrasena == this.pass2){
     return true;
   }else{
    this.ErrorContrasenas()
     return false
   }
  }

  edadValidation(anioTrabajador, anioActual){
    const calculo = (anioActual - anioTrabajador)
    if(calculo < 18){
      this.ErrorEdad();
      return false;
    }else{
      return true;
    }
  }

  ValidacionesEstados(err){
    if(err.status == 409){
      this.GmailExistente();
      return false
    }
    if(err.status == 400){
      this.RequiredDataAlert();
      return false
    }
  }

  ValidacionTelefono(){
    var Telefono = this.consumidorService.selectedConsumidor.telefono.toString()
    if( Telefono.length == 9 ){
      return true
      
    }else{
      this.ErrorTelefono();
      return false
    }
  }

  ValidacionLargoContasenas(){
    const largoContraseñas = this.consumidorService.selectedConsumidor.contrasena.toString()
    const largoPass2 = this.pass2.toString()
    if(largoContraseñas.length == 6 && largoPass2.length == 6){
      return true
    }else{
      this.ErrorLargoContrasenas();
      return false
    }
  }

  ValidacionEmail(){
    
  }




  // ALERTAS
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cuenta Creada',
      subHeader: '',
      message: 'Su cuenta ha sido creada exitosamente :)',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async RequiredDataAlert(){
    const alert = await this.alertController.create({
      header: 'Faltan Datos',
      message: 'Debe llenar todos los campos, no sea inbecil',
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

  async ErrorTelefono(){
    const alert = await this.alertController.create({
      header:'Formato Telefono Incorrecto',
      message: 'El numero de telefono debe tener 9 numeros',
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

  
}
