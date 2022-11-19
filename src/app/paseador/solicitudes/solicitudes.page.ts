import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  
  id : any;
  matches : any;
  consumidor : any;
  cantidadMatches: Number;

  constructor(
    private alertController: AlertController,
    private consumidorService : ConsumidorService,
    private trabajadorService : TrabajadorService,
    private matchService : MatchService,
  ) {
    this.ObtenerDatosMatch();
  }

  

  ngOnInit() {
    
  }

  ObtenerDatosMatch(){
    this.trabajadorService.ObtenerTrabajadorLogeado().subscribe(
      res => {
        this.id = res['_id']
        this.ObtenerId(this.id);
      },err =>{
        console.log(err)
      }
    )
    
  }

  ObtenerId(idTrabajador){
    this.matchService.verMatchTrabajador(idTrabajador).subscribe(
      res => {
        this.matches = res;
        this.cantidadMatches = Object.keys(res).length;
        console.log(this.matches)
        console.log(this.matches)
      },err =>{
        console.log(err)
      }
    )
    
  }
  
  ObtenerDatosConsumidor(idConsumidor){
    this.consumidorService.datosConsumidor(idConsumidor).subscribe(
      res => {
        console.log(res)
        this.consumidor = res
        console.log(this.consumidor)
      },err =>{
        console.log(err)
      }
    )
  }

  cancelarMatch(id){
    this.matchService.cancelarMatch(id).subscribe(
      res=>{console.log(res)
      this.ObtenerDatosMatch();
      this.Mensaje('Trabajo Cancelado','Proceso realizado exitosamente')},
      err=>console.log(err)
    )
  }

  async Mensaje(headerMensaje: string, bodyMensaje: string){
    const alert = await this.alertController.create({
      header: headerMensaje,
      message: bodyMensaje,
      buttons: ['OK']
    })
    await alert.present();
  }

  async preguntar(id){
    const alert = await this.alertController.create({
      header: 'Estás seguro que deseas cancelar el trabajo?',
      subHeader: 'Información importante',
      message: 'Ten en consideración que realizar esta acción puede perjudicar tu reputación como trabajador',
      buttons: [
        {
          text:'Cancelar',
          role: 'cancel'
         },
         {
           text: 'Enviar',
           role: 'confirm',
           handler:()=>{
            this.cancelarMatch(id);
           }
          }],
    });
    await alert.present();
  }

}