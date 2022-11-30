import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ReportesService } from 'src/app/services/reportes.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { MatchService } from 'src/app/services/match.service';
import { ValoracionService } from 'src/app/services/valoracion.service';
import { HorasService } from 'src/app/services/horas.service';
import { BilleteraService } from 'src/app/services/billetera.service';



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
  fechaHoy = Date.now();
  Disponible = true;
  valoracion: {};
  billetera: any;
  horarios: any;
  cantidadHoras: number;
  //test
  horaTrabajo : any;


  constructor(
    private horasService : HorasService,
    private matchService : MatchService,
    private route : ActivatedRoute,
    private trabajadorService : TrabajadorService,
    private alertController: AlertController,
    private reporteService: ReportesService,
    private consumidorService: ConsumidorService,
    private valoracionService: ValoracionService,
    private billeteraService: BilleteraService){
      this.idTrabajador = this.route.snapshot.params['id']
      this.cargarTrabajador(this.idTrabajador);
      this.obtenerIDConsumidor();
      this.cargarValoracion();
    }

      

  ngOnInit() {
  }

  cargarTrabajador(id: string){
    this.trabajadorService.getTrabajadorId(id).subscribe(
      res=> {this.trabajador = res;
        this.listarHorasTrabajador();
      console.log(this.trabajador);}, 
      err=> console.log(err));
  }

  cargarValoracion(){
    this.valoracionService.obtenerValoracionTrabajador(this.idTrabajador).subscribe(
      res=>this.valoracion = res,
      err=>console.log(err)
    )
  }

  async abrirReporte(){
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
      res=>{console.log(res);
        this.Confirmacion('Reporte enviado','Le llegará un mensaje de nuestros administradores para ver el estado de su reporte')},
      err=>console.log(err)
    )
  }

  obtenerIDConsumidor(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
      res=>{
        this.idConsumidor = res['_id'];
        this.obtenerSaldo(this.idConsumidor)},
      err => console.log(err));
  }

  hacerMatch(idHoraTrabajo){
    this.matchService.hacerMatch(idHoraTrabajo ,this.idConsumidor, this.idTrabajador , this.horaTrabajo, this.billetera).subscribe(
      res =>{
        console.log(res);
        this.Confirmacion('Match Creado', 'Solo debe esperar la llegada del paseador');
        this.listarHorasTrabajador();
      },
      err => {
           console.log(err)
           this.mensajesError(err);
      }
    )
  }

  obtenerSaldo(idConsumidor){
    this.billeteraService.obtenerMonto(idConsumidor).subscribe(
      res=>this.billetera = res['monto'],
      err=>console.log(err)
    );
  }

  listarHorasTrabajador(){
    this.horasService.ListarHorasDisponibleTrabajador(this.trabajador['_id']).subscribe(
      res => {
        console.log(res),
        this.horarios = res;
        this.cantidadHoras = Object.keys(this.horarios).length;
      }, err =>{
        console.log(err)
      }
    )
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  hora(hora : any){
    this.horaTrabajo = hora
    console.log(hora)
    this.Disponible = false
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

  async Confirmacion(cabecera: string, cuerpo: string){
    const alert =  await this.alertController.create({
      header: cabecera,
      message: cuerpo,
      buttons: ['OK']
    })

    await alert.present()
  }

  async abrirEstrellas(numero){
    const alert = await this.alertController.create({
      header: 'Valorar al paseador',
      inputs: [
        {
          name: 'opcion1',
          type: 'radio',
          label: '⭐',
          value: '1'
        },
        {
          name: 'opcion2',
          type: 'radio',
          label: '⭐⭐',
          value: '2'
        },
        {
          name: 'opcion3',
          type: 'radio',
          label: '⭐⭐⭐',
          value: '3'
        },
        {
          name: 'opcion4',
          type: 'radio',
          label: '⭐⭐⭐⭐',
          value: '4'
        },
        {
          name: 'opcion5',
          type: 'radio',
          label: '⭐⭐⭐⭐⭐',
          value: '5'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Valorar',
          handler: data => {
            this.valorar(data);
          },
        },
      ],
    });

    await alert.present();
  }


  valorar(calificacion){
    this.valoracionService.valorarTrabajador(calificacion, this.idTrabajador).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    );
  }

  mensajesError(err){
    switch (err.status){
      case 402:
        this.Confirmacion('Error de pago', 'Saldo insuficiente en la cartera');
        break;
      default:
        this.Confirmacion('Error de match', 'Ha ocurrido un problema al hacer match')
    }
  }
}