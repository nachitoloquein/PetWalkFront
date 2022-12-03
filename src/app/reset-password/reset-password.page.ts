import { Component, OnInit } from '@angular/core';
import { ConsumidorService } from '../services/consumidor.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  contrasena : any
  confirmarContraseña : any

  constructor(
    private consumidorService : ConsumidorService
  ) { }

  ngOnInit() {
  }


}
