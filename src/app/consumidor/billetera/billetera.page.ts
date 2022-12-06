import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { BilleteraService } from 'src/app/services/billetera.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { PlanesService } from 'src/app/services/planes.service';
import { WebpayService } from 'src/app/services/webpay.service';
import { AlertController } from '@ionic/angular';



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
    private alertController : AlertController,
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
          res=>this.billetera = res
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

  comprarCoins(costo:string, cantidadCoins: string){
    this.activarWebPay(costo);
    localStorage.setItem('total', costo);
    localStorage.setItem('coins', cantidadCoins)
    console.log(costo);
  }

  comprarCoinsBaratas(costoNuevo: string, cantidadCoins:string){
    this.activarWebPay(costoNuevo);
    console.log(costoNuevo, cantidadCoins)
    localStorage.setItem('coins', cantidadCoins)
    localStorage.setItem('total', costoNuevo);
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

  async MensajeInfo(){
    const alert = await this.alertController.create({
      
      header : "*Los PetsCoins sirven para comprar un paseo de mascotas*",
      message: "1 Petscoin = 1 paseo de mascota",
      buttons: ["Entendido"]

    })
    await alert.present();
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.ListarPlanes();
      this.obtenerIDUsuarioConectado();
      event.target.complete();
    }, 1000);
  };


}
