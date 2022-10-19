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


  login(){
    try{
    this.consumidorService.Logear(this.correo, this.contrasena).subscribe(
      res=>console.log(res), 
      err=>console.log(err))
    }catch(error){
      alert(error)
    }
  }
}
