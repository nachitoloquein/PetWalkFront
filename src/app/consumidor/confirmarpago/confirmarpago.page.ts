import { Component, OnInit } from '@angular/core';
import { WebpayService } from 'src/app/services/webpay.service';
import { Router } from '@angular/router';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { BilleteraService } from 'src/app/services/billetera.service';
import { PlanesService } from 'src/app/services/planes.service';

@Component({
  selector: 'app-confirmarpago',
  templateUrl: './confirmarpago.page.html',
  styleUrls: ['./confirmarpago.page.scss'],
})
export class ConfirmarpagoPage implements OnInit {

  usuario : any;

  constructor(
    private planService : PlanesService,
    private billeteraService : BilleteraService,
    private consumidorService: ConsumidorService,
    private route : Router,
    private webPayService: WebpayService
  ) { 
    this.obtenerIDUsuarioConectado()
  }



  RecargoCoins(){
    this.billeteraService.RecargaCoinsIdConsumidor(this.usuario).subscribe(
      res => console.log(res), err => console.log(err)
    )
  }

  ngOnInit() {
    this.RecargoCoins();
    setTimeout(() => {
      this.route.navigate(['/billetera'])
    }, 1000);
    
  }

  obtenerIDUsuarioConectado(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
      res=>{
        this.usuario = res['_id'];
      },
      err=>console.log(err)
    )
  }
}
