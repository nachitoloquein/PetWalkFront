import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { TrabajadorService } from '../services/trabajador.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthTrabajadorGuard implements CanActivate {

  constructor(private trabajadorService: TrabajadorService, private router: Router){}

  canActivate(){
    if(!this.trabajadorService.verificarToken()){
    return true;
  }
  else{
    this.router.navigate(['/tabPaseador']);
    return false;
  };

  }
  
}
