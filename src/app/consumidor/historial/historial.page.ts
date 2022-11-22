import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss', './../consumidorGlobalStyles.scss'],
})
export class HistorialPage implements OnInit {

  fechaActual = Date.now();
  idConsumidor: any;  
  matches: any;

  constructor(private matchService: MatchService, private consumidorService: ConsumidorService) {
    this.obtenerDatos();
   }

  ngOnInit() {
    this.VerConsumidor();
  }

  VerConsumidor(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
      res => {
      },err => {console.log(err)}
    )
  }

  
  listarHistorial(id){
    this.matchService.verHistorialConsumidor(id).subscribe(
      res=>{console.log(res)
      this.matches = res
    },
      err=>console.log(err)
    )
  }

  obtenerDatos(){
    this.consumidorService.obtenerConsumidorLogeado().subscribe(
      res=>{
        this.idConsumidor = res['_id'];
        this.listarHistorial(this.idConsumidor)}, 
      err => console.log(err));
  }

}
