import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constant } from 'src/app/utility/constant';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
})
export class FacultyComponent implements OnInit {
  bioDesc = Constant;
  order: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params:HTMLElement) => {
      if (params != null) {
        this.scrollToItem(params);
      }
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToItem(params){
    if (params.faculty) {
      let item = document.getElementById(params.faculty);
      item.scrollIntoView({ behavior: 'smooth' });
    }   
  }
}
