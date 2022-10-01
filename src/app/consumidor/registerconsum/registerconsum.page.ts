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

  //OBTENER COMUNAS
  getComunas(){
    this.comunaService.listarComunas().subscribe(
      res => {
        this.comunaService.comunas = res;
      },
      err => console.log(err)
    );
  }

  addRegistro(form: NgForm){
    try{
      if(this.consumidorService.selectedConsumidor.contrasena == this.pass2){

       this.consumidorService.crearRegistroConsum(form.value).subscribe(
        res => {
          if(form.valid){
            this.presentAlert();
            form.onReset()
          }
          
        },
        err =>{console.log(err)}
        ); 
      }else{
        alert('las contraseñas no coinciden')
      }
      
    }
    catch(err){
      console.log(err)
    }
    
  }

}
