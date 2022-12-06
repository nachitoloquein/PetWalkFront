import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-paseador',
  templateUrl: './tutorial-paseador.page.html',
  styleUrls: ['./tutorial-paseador.page.scss'],
})
export class TutorialPaseadorPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  retornarPerfil(){
    this.router.navigate(['/tabPaseador/perfilP'])

  }

}
