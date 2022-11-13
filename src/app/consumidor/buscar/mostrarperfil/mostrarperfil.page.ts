import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ReportesService } from 'src/app/services/reportes.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { MatchService } from 'src/app/services/match.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-mostrarperfil',
  templateUrl: './mostrarperfil.page.html',
  styleUrls: ['./mostrarperfil.page.scss', '../../consumidorGlobalStyles.scss'],
})
export class MostrarperfilPage implements OnInit {

  idTrabajador: any;
  trabajador : any;
  edad: number;
  idConsumidor: any;
  isModalOpen = false;
  something;

  //test
  horaTrabajo : any;


  constructor(
    private matchService : MatchService,
    private route : ActivatedRoute,
    private trabajadorService : TrabajadorService,
    private alertController: AlertController,
    private reporteService: ReportesService,
    private consumidorService: ConsumidorService){
      this.idTrabajador = this.route.snapshot.params['id']
      this.cargarTrabajador(this.idTrabajador);
      this.obtenerIDConsumidor();
    }

      

  ngOnInit() {
  }


  cargarTrabajador(id: string){
    this.trabajadorService.getTrabajadorId(id).subscribe(
      res=> {this.trabajador = res;
      console.log(this.trabajador);}, 
      err=> console.log(err));
  }

  calcularEdad(){
    const anio = this.trabajador.fechaNacimiento
    console.log(anio);
  }

  async abrirAlert(){
    const alert = await this.alertController.create({
      header: 'Porfavor indica las causas del reporte',
      buttons: [
        {
          text:'Cancelar',
          role: 'cancel'
         },
         {
           text: 'Enviar',
           role: 'confirm',
           handler:(alertData)=>{
            this.hacerReporte(alertData.descripcion);
           }
          }],
      inputs:[
        {
          type: 'textarea',
          placeholder: 'Motivo',
          name: 'descripcion'
        }
      ],

    });
    await alert.present();
  }
  
  hacerReporte(descripcion){
    this.reporteService.reportarTrabajador(this.idTrabajador, this.idConsumidor, descripcion).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

  obtenerIDConsumidor(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
      res=>{
        this.idConsumidor = res['_id']},
      err => console.log(err));
  }

  hacerMatch(){
    this.matchService.hacerMatch(this.idConsumidor, this.idTrabajador , this.horaTrabajo, this.idConsumidor.cantidadCoins).subscribe(
      res =>{
        console.log(res);
      },
      err => {
           console.log(err)
           this.ValidarHora(err);
      }
    )
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  hora(hora : any){
    this.horaTrabajo = hora
  }

  ValidarHora(err){
    if(err.status == 400){
      this.ErrorHora();
    }
  }

  async ErrorHora(){
    const alert =  await this.alertController.create({
      header: 'Debe escoger un horario',
      buttons: ['OK']
    })

    await alert.present()
  }

  

  


}