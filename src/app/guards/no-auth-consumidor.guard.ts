import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { ConsumidorService } from '../services/consumidor.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoAuthConsumidorGuard implements CanActivate {

  constructor(private consumidorService: ConsumidorService, private router: Router){}

  canActivate(){
    if(!this.consumidorService.verificarToken()){
      return true;
    }
    else{
      this.router.navigate(['/perfil']);
      return false;
    };
  }
  
}
