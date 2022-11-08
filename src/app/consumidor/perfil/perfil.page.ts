import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { BilleteraService } from 'src/app/services/billetera.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss', '../consumidorGlobalStyles.scss'],
})
export class PerfilPage implements OnInit {

  consumidor: any;
  billetera: any;

  constructor(private router: Router, 
    private consumidorService: ConsumidorService,
    private billeteraService: BilleteraService) { 
   
  }

  ngOnInit() {
    this.obtenerDatos();
  }

  LogOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/consumidor']);
  }

  obtenerDatos(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
      res=>{
        this.consumidor = res
        this.obtenerSaldo(this.consumidor['_id'])}, 
      err => console.log(err));
  }

  obtenerSaldo(idConsumidor){
    this.billeteraService.obtenerMonto(idConsumidor).subscribe(
      res=>this.billetera = res['monto'],
      err=>console.log(err)
    );
  }

}
