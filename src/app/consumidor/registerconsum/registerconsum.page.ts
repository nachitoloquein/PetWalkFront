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

  constructor(private alertController: AlertController,
    public consumidorService: ConsumidorService,
    public comunaService: ComunasService){
    this.getComunas();
  }

  ngOnInit() {

  }

  // Codigo funcion principal para agregar registrar Consumidor
  addRegistro(form: NgForm){
    try {
      if(!this.ValidacionEmail()){
        this.Mensaje('Error en el formato de correo electrónico','El formato de correo electrónico debe ser el siguiente: gmail@gmail.com');
        return false;
      }
      if(!this.comparar()) return false
      
      if(!this.ValidacionLargoContasenas()) return false
      
      if(!this.edadValidation(Number(this.consumidorService.selectedConsumidor.fechaNacimiento.substring(0,4)), 2022)) return false
      
      if(!this.ValidacionTelefono()) return false
      
      this.consumidorService.crearRegistroConsum(form.value).subscribe(
        res => {
          console.log(res)
          this.Mensaje('Registro exitoso!','Le enviaremos un correo de confirmación para verificar su registro');
          form.onReset();
        },
        err =>{
          console.log(err)
          this.ValidacionesEstados(err);
        } 
      )
    }catch(error) {
      console.log(error);
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
    this.Mensaje('Contraseñas Invalidas','Las contraseñas deben ser iguales');
     return false;
   }
  }

  edadValidation(anioTrabajador, anioActual){
    const calculo = (anioActual - anioTrabajador)
    if(calculo < 18){
      this.Mensaje('Es Menor de edad','Para crear una cuenta debes ser mayor de edad');
      return false;
    }else{
      return true;
    }
  }

  ValidacionesEstados(err){
    if(err.status == 409){
      this.Mensaje('Correo Electronico Existente','El correo que ha ingresado ya esta registrado');
      return false
    }
    if(err.status == 400){
      this.Mensaje('Faltan datos','Debe rellenar todos los campos');
      return false
    }
  }

  ValidacionTelefono(){
    var Telefono = this.consumidorService.selectedConsumidor.telefono.toString()
    if( Telefono.length == 9 ){
      return true
    }else{
      this.Mensaje('Formato Telefono Incorrecto','El numero de telefono debe tener 9 numeros');
      return false;
    }
  }

  ValidacionLargoContasenas(){
    const largoContraseñas = this.consumidorService.selectedConsumidor.contrasena.toString();
    const largoPass2 = this.pass2.toString();
    if(largoContraseñas.length == 6 && largoPass2.length == 6){
      return true;
    }else{
      this.Mensaje('Error de Contraseñas','La contraseña debe tener 6 caracteres');
      return false;
    }
  }

  ValidacionEmail(){
    let email = this.consumidorService.selectedConsumidor.correo
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  }

  // ALERTAS
  async Mensaje(headerMensaje: string, bodyMensaje: string){
    const alert = await this.alertController.create({
      header: headerMensaje,
      message: bodyMensaje,
      buttons: ['OK']
    })
    await alert.present();
  }
}