import { Component, OnInit } from '@angular/core';
import { BilleteraService } from 'src/app/services/billetera.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { PlanesService } from 'src/app/services/planes.service';

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.page.html',
  styleUrls: ['./billetera.page.scss'],
})
export class BilleteraPage implements OnInit {

  planes= [];
  idConsumidor: string;
  billetera: any;

  constructor(private planService : PlanesService, 
    private consumidorService: ConsumidorService,
    private billeteraService: BilleteraService) { 
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
}
