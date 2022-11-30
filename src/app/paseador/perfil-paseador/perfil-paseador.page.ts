import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { HorasService } from 'src/app/services/horas.service';
import { ToastController } from '@ionic/angular';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-perfil-paseador',
  templateUrl: './perfil-paseador.page.html',
  styleUrls: ['./perfil-paseador.page.scss'],
})
export class PerfilPaseadorPage implements OnInit {

  trabajador : any;
  idTrabajador: any;
  horaInicio : any
  horaTermino : any
  horarios : any
  fechaHoy = Date.now();
  contador : any
  ganancias : any
  paseos : any

  constructor(
    private matchService : MatchService,
    private toastController : ToastController,
    private horarioService : HorasService,
    private trabajadorService : TrabajadorService,
    private router: Router
  ) {
    
   }

  ngOnInit() {
    this.obtenerDatos();
  }

  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  LogOut(){
    sessionStorage.removeItem('token')
    this.router.navigate(['loginPaseador'])
  }

  obtenerDatos(){
    this.trabajadorService.ObtenerTrabajadorLogeado().subscribe(
      res=>{
        this.trabajador = res,
        this.ListarHorarioDisponible(this.trabajador['_id'])
        this.ContPaseos(this.trabajador['_id'])
        
      },
      err => console.log(err));
  }

  ContPaseos(id){
    this.matchService.verHistorialTrabajador(id).subscribe(
      res =>{
        this.paseos = res
        this.contador = this.paseos.filter(m => m.estadoTrabajo == 'Finalizado').length 
        this.ganancias = this.contador * 4500
      }
    )
  }

  CrearHorarioDisponible(){    
   this.horarioService.CrearHorario(this.trabajador['_id'], this.horaInicio +'-'+ this.horaTermino).subscribe(
    res => {
      this.presentToast('top', 'Horario Creado Correctamente', "success")
      this.ListarHorarioDisponible(this.trabajador['_id']);
    }, err => {
      console.log(err)
    }
   )  
  }

  BorrarHorarioDisponible(id){
    this.horarioService.EliminarHorario(id).subscribe(
      res => {
        this.presentToast('top', 'Horario Eliminado Correctamente', 'danger' );
        this.ListarHorarioDisponible(this.trabajador['_id']);
      }, err => {
        console.log(err)
      }
    )
  }

  ListarHorarioDisponible(id){
    this.horarioService.ListarHorasDisponibleTrabajador(id).subscribe(
      res => {
        this.horarios = res
        console.log(this.horarios)
      }, err => {
        console.log(err)
      }
    )
  }
  async presentToast(position: 'top' | 'middle' | 'bottom', message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position: position,
      color
    });

    await toast.present();
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.obtenerDatos();
      event.target.complete();
    }, 2000);
  };
}
