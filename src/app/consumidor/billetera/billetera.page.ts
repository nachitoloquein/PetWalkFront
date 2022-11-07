import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
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
  Coins : any

  constructor(
    private planService : PlanesService, 
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
          res=>{this.billetera = res
          this.cargarCoins();}
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

  comprarCoinsBaratas(costoNuevo: number, cantidadCoins:string){
    this.activarWebPay(costoNuevo);
    console.log(costoNuevo, cantidadCoins)
    localStorage.setItem('coins', cantidadCoins);
  }

  RecargaCoins(cantidadCoins: any){
    this.Coins = cantidadCoins
    console.log(this.Coins)


  }

  cargarCoins(){
    this.billeteraService.cargarBilletera(this.idConsumidor, this.Coins).subscribe(
      res=>{
        console.log(this.Coins)
      },
      err=>console.log(err)
    ) 
  }



}
