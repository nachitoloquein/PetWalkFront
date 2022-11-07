import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';
import { BilleteraService } from 'src/app/services/billetera.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaccion-buena',
  templateUrl: './transaccion-buena.page.html',
  styleUrls: ['./transaccion-buena.page.scss'],
})
export class TransaccionBuenaPage implements OnInit {

  idConsumidor:any;
  Coins : any;

  fechaActual = Date.now();
  
  constructor(
    private router : Router,
    private consumidorService: ConsumidorService, 
    private billeteraService: BilleteraService) { 
      this.obtenerid();
     
  }



  ngOnInit() {
    window.print();
  }

  obtenerid(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
    res=>{this.idConsumidor = res['_id']  
      this.cargarCoins()
      setTimeout(() => {
        this.router.navigate(['/home-consumidor/billetera'])
      }, 5000)},
    err=>console.log(err));
  }

  cargarCoins(){
    this.billeteraService.cargarBilletera(this.idConsumidor, localStorage.getItem('coins')).subscribe(
      res=> {
        console.log(res),
        localStorage.removeItem('coins');
        
      },
      err=>console.log(err)
    ) 
  }


}
