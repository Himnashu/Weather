import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
apikey='e5df390f1d394d8293cb6420ec175fd3'; 
url;

  constructor(private http : HttpClient) {
    this.url= "http://api.openweathermap.org/data/2.5/forecast?q=";
   }


   getweather(city, code){
     var ur=this.url+city+','+code+'&APPID='+this.apikey;
     return this.http.get(ur).pipe(
       map( (resp) => resp)
     );
   }
}
