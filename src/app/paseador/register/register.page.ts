import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
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



  constructor(private alertController: AlertController, 
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
  // FIN ALERTAS


  //agrega los registros del paseador y revuelve un mensaje de enviado o no envido, ademas de su validacion de campos vacios
  addRegistro(form: NgForm){ 
    try{
      
      this.Comparar();
        if(this.Comparar()== true){
          this.Rut();
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
      err =>{console.log(err)} 
    );
    return false;
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
      alert('Las contraseñas deber ser iguales')
      return false
    }

  }

  Rut(){

    
  }

  // FIN VALIDACIONES


}
