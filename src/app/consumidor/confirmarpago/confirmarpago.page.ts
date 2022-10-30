import { Component, OnInit } from '@angular/core';
import { WebpayService } from 'src/app/services/webpay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmarpago',
  templateUrl: './confirmarpago.page.html',
  styleUrls: ['./confirmarpago.page.scss'],
})
export class ConfirmarpagoPage implements OnInit {

  constructor(
    private route : Router,
    private webPayService: WebpayService
  ) { }

  ngOnInit() {
    if(!this.webPayService.ConfirmarPago){
      console.log('err')
    }else{
      this.route.navigate(['/transaccionBuena'])
    }
  }


}
