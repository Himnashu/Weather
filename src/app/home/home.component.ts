import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';
WeatherService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  city='london';
  code='uk';
  data1;
  weather;
  constructor(private route: ActivatedRoute,  private wservic : WeatherService) {
    this.route.queryParams.subscribe(params => {
        this.data1 = params;
        this.city=this.data1.city;
        this.code=this.data1.code;
    });
    this.wservic.getweather(this.city, this.code).subscribe((data) =>{
      this.weather=data;
    })
}
  

  ngOnInit() {
   
  }

}
