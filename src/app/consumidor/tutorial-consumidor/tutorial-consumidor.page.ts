import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-consumidor',
  templateUrl: './tutorial-consumidor.page.html',
  styleUrls: ['./tutorial-consumidor.page.scss'],
})
export class TutorialConsumidorPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  retornarPerfil(){
    this.route.navigateByUrl('/tab/perfil');
  }

}
