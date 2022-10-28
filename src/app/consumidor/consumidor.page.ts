import { Component, OnInit } from '@angular/core';
import {ConsumidorService} from '../services/consumidor.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.page.html',
  styleUrls: ['./consumidor.page.scss'],
})
export class ConsumidorPage implements OnInit {

  correo: string;
  contrasena: string;

  constructor(
    private consumidorService: ConsumidorService, 
    private router : Router,
  ){}

  ngOnInit() {
  }


  login(){
    try{
    this.consumidorService.Logear(this.correo, this.contrasena).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token', res['token']);
        this.router.navigate(['/perfil'])
    }, 
      err=>console.log(err));
    }catch(error){
      alert(error)
    }
  }

  
}
