import { Component, OnInit } from '@angular/core';
import { ConsumidorService } from '../services/consumidor.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    private consumidorService : ConsumidorService
  ) { }

  email : any

  ngOnInit() {
  }

  

}
