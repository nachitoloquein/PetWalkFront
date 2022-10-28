import { Component, OnInit } from '@angular/core';
import { PlanesService } from 'src/app/services/planes.service';

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.page.html',
  styleUrls: ['./billetera.page.scss'],
})
export class BilleteraPage implements OnInit {

  planes= [];

  constructor(private planService : PlanesService) { 
    this.ListarPlanes();
  }

  ngOnInit() {
  }

  ListarPlanes(){
    this.planService.ListarAllPlanes().subscribe(
      res => {
        console.log(res);
        this.planes = res;
      },err => {
        console.log(err)
      }
    )
  }

}
