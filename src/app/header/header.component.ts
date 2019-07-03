import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
City;
Code;
location;
  constructor(private _router : Router) { }

  ngOnInit() {
  }
  weather(form : NgForm){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "city" : this.City,
        "code" : this.Code          
      }
    };
    this._router.navigate(["home"], navigationExtras);
  }

}
