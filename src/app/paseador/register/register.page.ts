import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ComunasService } from 'src/app/services/comunas.service';


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
        this.Mensaje('Formato de Email Incorrecto','El formato del Email debe ser correo@correo.com');
        return false;
      }
      if(!this.Comparar()) return false

      if(!this.ValidacionLargoContasenas()) return false
      
      if(!this.edadValidation(Number(this.trabajadorService.selectedTrabajador.fechaNacimiento.substring(0,4)), 2022)) return false
      
      if(!this.ValidacionTelefono()) return false
      
      if(!this.ValidarRut()) return false
      
      this.trabajadorService.crearSolicitud(form.value, this.antecedentes, this.fotoDelantera, this.fotoTrasera).subscribe(
        res =>{
          console.log(res);
          if(form.valid && (this.antecedentes && this.fotoDelantera && this.fotoTrasera)){
            this.Mensaje('Solicitud Correctamente enviada','Estimado, disponemos de 2 días hábiles para la respuesta, se enviará un correo de confirmación');
            form.onReset();
          }else{
            this.Mensaje('Error','Faltan datos')
          }
          
        },
        err => {
          console.log(err)
          this.ValidacionesEstados(err)
        } 
      )
    }catch (error) {
      console.log(error); 
    }
  }

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
      this.Mensaje('Contraseñas Invalidas','Las contraseñas deben ser iguales');
      return false
    }
  }

  ValidacionLargoContasenas(){
    const largoContraseñas = this.trabajadorService.selectedTrabajador.contrasena.toString()
    const largoPass2 = this.pass2.toString()
    if(largoContraseñas.length == 6 && largoPass2.length == 6){
      return true;
    }else{
      this.Mensaje('Error de Contraseñas','La contraseña debe tener 6 caracteres');
      return false;
    }
  }

  edadValidation(anioTrabajador, anioActual){

    const calculo = (anioActual - anioTrabajador)
    if(calculo < 18){
      this.Mensaje('Es Menor de edad','Para crear una cuenta debes ser mayor de edad');
      return false;
    }else{
      console.log('es mayor');
      return true;
    }
  }

  ValidacionesEstados(err){
    if(err.status == 409){
      this.Mensaje('Correo Electronico Existente','El correo que ha ingresado ya esta registrado')
    }    
  }

  ValidacionEmail(){
    let email = this.trabajadorService.selectedTrabajador.correo;
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  }

  ValidacionTelefono(){
    var Telefono = this.trabajadorService.selectedTrabajador.telefono.toString()
    if( Telefono.length == 9 ){
      return true;
    }else{
      this.Mensaje('Formato Telefono Incorrecto','El numero de telefono debe tener 9 numeros')
      return false;
    }
  }

  ValidarRut(){
    var rut = this.trabajadorService.selectedTrabajador.rut;
    if(!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut) ){
      this.Mensaje('Formato Rut Incorrecto','El formato de rut debe ser 111111111-1(k)');
      return false;
    }else{
      return true;
    }
  }

  // FIN VALIDACIONES


  // ALERTAS

  async Mensaje(cabecera: string, body: string){
    const alert = await this.alertController.create({
      header: cabecera,
      message: body,
      buttons: ['OK']
    })
    await alert.present()
  }

  // FIN ALERTAS
}
    


  