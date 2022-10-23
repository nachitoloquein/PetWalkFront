import { Component, ElementRef, Inject, inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GoogleMapService } from 'src/app/services/google-map.service';
import { Plugins } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';

declare var google: any

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {

  @Input() position = {
    lat : -2.24,
    lng : -14.4
  }

  label = {
    titulo : 'ubicacion',
    subtitulo : 'asdasd'
  }

  map : any
  marker : any
  infowindow : any
  positionSet : any

  @ViewChild('map') divMap : ElementRef;


  constructor(
    private renderer : Renderer2,
    @Inject(DOCUMENT) private document,
    private googlemapServices : GoogleMapService,
    public modalController : ModalController
  ) { }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    this.googlemapServices.init(this.renderer, this.document).then(() => {
      this.initMap();
    }).catch((err) =>{
      console.log(err)
    }) 
  }

  initMap(){

    const position = this.position;
    let latLng = new google.map.latLng(position.lat, position.lng);

    let maoOptions = {
      center: latLng,
      zoom : 5,
      disableDefaultUI : true,
      clickableIcons : false,
    };

    this.map = new google.maps.Map(this.divMap.nativeElement, maoOptions);
    this.marker = new google.maps.Marker({
      map: this.map,
      animation : google.map.Animation.DROP,
      draggable : true
    });

  }

}
