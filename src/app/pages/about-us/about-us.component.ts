import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/utility/constant';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  bioDesc = Constant;
  constructor() { }

  ngOnInit() {
  }

}
