import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaccion-mala',
  templateUrl: './transaccion-mala.page.html',
  styleUrls: ['./transaccion-mala.page.scss'],
})
export class TransaccionMalaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.removeItem('coins')
  }

}
