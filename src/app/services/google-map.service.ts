import { Injectable, } from '@angular/core';
import { environment} from 'src/environments/environment';

declare var google : any;


@Injectable({
  providedIn: 'root'
})
export class GoogleMapService {

  apiKey = environment.ApiKeyGoogleMaps
  mapLoader = false;

  constructor() { }

  init(renderer: any , document: any): Promise<any> {
    return new Promise((resolve) => {
      if(this.mapLoader){
        console.log('google is preview loaded')
        resolve(true);
        return;
      }

      const script = renderer.createElement('script');
      script.id = 'googleMaps';

      window['mapInit'] = () => {
        this.mapLoader = true;
        if(google){
          console.log('google is loader')
        }else{
          console.log('google is no defined')
        }
        resolve(true);
        return;
      }

      if(this.apiKey){
        script.src = 'https://maps.googleapis.com/maps/api/js?Key=' + this.apiKey + '&callback=mapInit';
      }else{
        script.src = 'https://maps.googleapis.com/maps/js?callback=mapInit';
      }

      renderer.appedChild(document.body, script);
    });

  }
}
