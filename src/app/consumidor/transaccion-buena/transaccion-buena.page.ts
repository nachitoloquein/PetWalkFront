import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';
import { BilleteraService } from 'src/app/services/billetera.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { Router } from '@angular/router';
import { BoletaService } from 'src/app/services/boleta.service';

@Component({
  selector: 'app-transaccion-buena',
  templateUrl: './transaccion-buena.page.html',
  styleUrls: ['./transaccion-buena.page.scss', '../consumidorGlobalStyles.scss'],
})
export class TransaccionBuenaPage implements OnInit {

  idConsumidor:any;
  CantidadCoins = localStorage.getItem('coins')
  total = localStorage.getItem('total')
  fechaActual = Date.now();

  consumidor: any;
  
  constructor(
    private router : Router,
    private consumidorService: ConsumidorService, 
    private billeteraService: BilleteraService,
    private boletaService: BoletaService) { 
      this.obtenerid();
     
  }



  ngOnInit() {
    window.print();
  }

  generarBoleta(idConsumidor){
    this.boletaService.generarBoleta(idConsumidor, this.CantidadCoins, this.total, this.fechaActual).subscribe(
      res=>console.log(res),
      e=>console.log(e)
    );
  }

  obtenerid(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
    res=>{this.idConsumidor = res['_id'];
          this.generarBoleta(this.idConsumidor);
          this.cargarCoins()},
    err=>console.log(err));
  }

  cargarCoins(){
    this.billeteraService.cargarBilletera(this.idConsumidor, localStorage.getItem('coins')).subscribe(
      res=> {
        console.log(res)
          localStorage.removeItem('coins');
          localStorage.removeItem('total');      
      },
      err=>console.log(err)
    ) 
  }


}
