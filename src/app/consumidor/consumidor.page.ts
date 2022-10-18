import { Component, OnInit } from '@angular/core';
import {ConsumidorService} from '../services/consumidor.service'

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.page.html',
  styleUrls: ['./consumidor.page.scss'],
})
export class ConsumidorPage implements OnInit {

  correo: string;
  contrasena: string;

  constructor(private consumidorService: ConsumidorService) { }

  ngOnInit() {
  }


 /*  login(){
    this.consumidorService.
  } */
}
