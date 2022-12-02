import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BilleteraService } from 'src/app/services/billetera.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { HorasService } from 'src/app/services/horas.service';
import { MatchService } from 'src/app/services/match.service';
import { TrabajadorService } from 'src/app/services/trabajador.service';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss', '../consumidorGlobalStyles.scss']
})
export class BuscarPage implements OnInit {

  filterTerm : string;
  trabajadores = [];
  isModalOpen = false;
  fechaHoy = Date.now();
  cantidadHoras : Number;
  horarios: any;
  idTrabajadorVar: any;
  idConsumidor: any;
  billetera: any;

  constructor(
    public trabajadorService : TrabajadorService,
    private matchService : MatchService,
    private horasService : HorasService,
    private alertController: AlertController,
    private consumidorService: ConsumidorService,
    private billeteraService: BilleteraService) {
    this.listarTrabajadores();
    this.obtenerIDConsumidor();
   }

  ngOnInit() {
  }

  listarTrabajadores(){
    this.trabajadorService.ListarAllTrabajadores().subscribe(
      res => {
        this.trabajadores = res.filter((m) => m.estado == 'Activo')
        console.log(this.trabajadores);
      },
      err => {
        console.log(err)

      }
    )
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  cargarHorarios(idTrabajador){
    this.isModalOpen = true;
    this.idTrabajadorVar = idTrabajador;
    this.horasService.ListarHorasDisponibleTrabajador(idTrabajador).subscribe(
      res=> {
          this.horarios = res
          this.cantidadHoras = Object.keys(this.horarios).length;
        },
      err=> this.mensajesError(err)
    );
  }

  async Confirmacion(cabecera: string, cuerpo: string){
    const alert =  await this.alertController.create({
      header: cabecera,
      message: cuerpo,
      buttons: ['OK']
    })

    await alert.present()
  }

  async hacerMatch(idHoraTrabajo){
    this.matchService.hacerMatch(idHoraTrabajo, this.idConsumidor, this.idTrabajadorVar, this.billetera).subscribe(
      res =>{
        console.log(res);
        this.Confirmacion('Match Creado', 'Solo debe esperar la llegada del paseador');
        this.cargarHorarios(this.idTrabajadorVar);
      },
      err => {
           console.log(err)
           this.mensajesError(err);
      }
    )
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

  obtenerIDConsumidor(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
      res=>{
        this.idConsumidor = res['_id'];
        this.obtenerSaldo(this.idConsumidor)},
      err => console.log(err));
  }

  obtenerSaldo(idConsumidor){
    this.billeteraService.obtenerMonto(idConsumidor).subscribe(
      res=>this.billetera = res['monto'],
      err=>console.log(err)
    );
  }
}
