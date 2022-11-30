import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paseando',
  templateUrl: './paseando.page.html',
  styleUrls: ['./paseando.page.scss'],
})
export class PaseandoPage implements OnInit {

  minutes: any;
  seconds: any;
  consumidor: any;

  constructor(
    private router : Router,
    private trabajadorService : TrabajadorService,
    private matchService : MatchService,
    private consumidorService : ConsumidorService

  ) { }

  ngOnInit() {
    this.CountDown();
    this.obtenerDatosConsumidor();
  }


  CountDown(){

    var date = new Date('2020-01-01 00:30:00');

    // Función para rellenar con ceros
    var padLeft = n => "00".substring(0, "00".length - n.length) + n;

    // Asignar el intervalo a una variable para poder eliminar el intervale cuando llegue al limite
    var interval = setInterval(() => {

      // Asignar el valor de minutos
      this.minutes = padLeft(date.getMinutes() + "");
      // Asignqr el valor de segundos
      this.seconds = padLeft(date.getSeconds() + "");

      // Restarle a la fecha actual 1000 milisegundos
      date = new Date(date.getTime() - 1000);

      // Si llega a 2:45, eliminar el intervalo
      if(this.minutes == '00' && this.seconds == '00') {
        clearInterval(interval);
        
        this.finalizarPaseo();


      }

    }, 1000);
    }

  idTrabajador(){
    this.trabajadorService.ObtenerTrabajadorLogeado().subscribe(
      res =>{
        console.log(res)
      }
    )
  }

  /* idMatch(id){
    this.matchService.verMatchTrabajador(id).subscribe(
      res => {

      }
    )
  } */

  obtenerDatosConsumidor(){
    this.consumidorService.datosConsumidor(sessionStorage.getItem('idConsumidor')).subscribe(
      res=> this.consumidor = res,
      err=> console.log(err)
    );
  }

  finalizarPaseo(){
    this.matchService.finalizarMatch(sessionStorage.getItem('idMatch')).subscribe(
      res => {
        sessionStorage.removeItem('idMatch');
        sessionStorage.removeItem('idConsumidor');
        this.router.navigate(['/fin'])
        console.log(res)
      }
    )

  }

}
