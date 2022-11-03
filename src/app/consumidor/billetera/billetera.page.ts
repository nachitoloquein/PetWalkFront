import { Component, OnInit, ViewChild } from '@angular/core';
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

  planes= [];
  idConsumidor: string;
  billetera: any;
  respuesta:any;
  urlDePago: string;

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

  activarWebPay(cantidadDinero){
    this.webpayService.generarCompra(cantidadDinero).subscribe(
      res=>{
        this.respuesta = res;
        this.urlDePago = (`${this.respuesta['url']}?token_ws=${this.respuesta['token']}`);
        window.location.href=this.urlDePago;
      },
      err=> console.log(err)
    )
  }

  comprarCoins(costo:number){
    this.activarWebPay(costo);
    console.log(costo);
  }

  comprarCoinsBaratas(costoNuevo: number){
    this.activarWebPay(costoNuevo);
    console.log(costoNuevo);
  }

  RecargaCoins(){
    this.billeteraService.obtenerMonto
  }





}
