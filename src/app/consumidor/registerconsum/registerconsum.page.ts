import { Component, OnInit } from '@angular/core';
import { ConsumidorService } from 'src/app/services/consumidor.service';
import { ComunasService } from 'src/app/services/comunas.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registerconsum',
  templateUrl: './registerconsum.page.html',
  styleUrls: ['./registerconsum.page.scss'],
})
export class RegisterconsumPage implements OnInit {

  pass2: string;

  constructor(
    public consumidorService: ConsumidorService,
    public comunaService: ComunasService,
  ){
    this.getComunas();
  }

  ngOnInit() {

  }

  //OBTENER COMUNAS
  getComunas(){
    this.comunaService.listarComunas().subscribe(
      res => {
        this.comunaService.comunas = res;
      },
      err => console.log(err)
    );
  }

  addRegistro(form: NgForm){
    try{
      if(this.consumidorService.selectedConsumidor.contrasena == this.pass2){

       this.consumidorService.crearRegistroConsum(form.value).subscribe(
        res => {
          alert('creado Correctamente')
          console.log(res)
        },
        err =>{console.log(err)}
        ); 
      }else{
        alert('las contraseñas no coinciden')
      }
      
    }
    catch(err){
      console.log(err)
    }
    
  }

}
