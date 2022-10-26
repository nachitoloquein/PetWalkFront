import { Component, OnInit } from '@angular/core';
import { PlanesService } from 'src/app/services/planes.service';

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.page.html',
  styleUrls: ['./billetera.page.scss'],
})
export class BilleteraPage implements OnInit {

  constructor(public MostrarPlanes : PlanesService) { 
    this.ListarPlanes();
  }

  ngOnInit() {
  }

  ListarPlanes(){
    this.MostrarPlanes.ListarAllPlanes().subscribe(
      res => {
        console.log(res)
        this.MostrarPlanes.planes = res
        

      },err => {
        console.log(err)
      }
    )
  }

}
