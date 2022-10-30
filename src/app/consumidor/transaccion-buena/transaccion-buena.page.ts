import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaccion-buena',
  templateUrl: './transaccion-buena.page.html',
  styleUrls: ['./transaccion-buena.page.scss'],
})
export class TransaccionBuenaPage implements OnInit {

  constructor() { 
    window.print();
  }

  ngOnInit() {
  }

}
