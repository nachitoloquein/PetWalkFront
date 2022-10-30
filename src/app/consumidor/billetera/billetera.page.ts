import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { BilleteraService } from 'src/app/services/billetera.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { PlanesService } from 'src/app/services/planes.service';
import { WebpayService } from 'src/app/services/webpay.service';

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.page.html',
  styleUrls: ['./billetera.page.scss'],
})
export class BilleteraPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  planes= [];
  idConsumidor: string;
  billetera: any;
  respuesta:any;

  constructor(private planService : PlanesService, 
    private consumidorService: ConsumidorService,
    private billeteraService: BilleteraService,
    private webpayService: WebpayService) { 
    this.ListarPlanes();
    this.obtenerIDUsuarioConectado();
  }

  ngOnInit() {
  }

  ListarPlanes(){
    this.planService.ListarAllPlanes().subscribe(
      res => {
        this.planes = res;
      },err => {
        console.log(err)
      }
    )
  }

  obtenerIDUsuarioConectado(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
      res=>{
        this.billeteraService.obtenerMonto(res['_id']).subscribe(
          res=>{this.billetera = res}
        );
      },
      err=>console.log(err)
    )
  }

  comprarCoins(costo:number){
    this.webpayService.generarCompra(costo).subscribe(
      res=>{
        this.respuesta = res;
        console.log(this.respuesta);
      },
      err=> console.log(err)
    )
  }

  cancel(){
    this.modal.dismiss('cancel');
  }



}
