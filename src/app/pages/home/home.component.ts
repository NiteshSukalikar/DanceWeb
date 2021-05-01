import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  SlideOptions = { items: 3, dots: true, nav: false }; 
  constructor() { }

  ngOnInit() {
  }

}
