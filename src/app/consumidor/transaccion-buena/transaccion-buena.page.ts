import { Component, OnInit } from '@angular/core';
import { BilleteraService } from 'src/app/services/billetera.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';

@Component({
  selector: 'app-transaccion-buena',
  templateUrl: './transaccion-buena.page.html',
  styleUrls: ['./transaccion-buena.page.scss'],
})
export class TransaccionBuenaPage implements OnInit {

  idConsumidor:any;
  fechaActual = Date.now();
  constructor(private consumidorService: ConsumidorService, 
    private billeteraService: BilleteraService) { 
      this.obtenerid();
      //this.cargarCoins();
  }



  ngOnInit() {
    window.print();
  }

  obtenerid(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
    res=>{this.idConsumidor = res['_id']  
      this.cargarCoins()},
    err=>console.log(err));
  }

  cargarCoins(){
    this.billeteraService.cargarBilletera(this.idConsumidor).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }


}
