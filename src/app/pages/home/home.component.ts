import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from 'src/app/utility/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bioDesc = Constant;
  SlideOptions = { items: 3, dots: true, nav: false };
  constructor(private router: Router,private route:ActivatedRoute) {}

  ngOnInit() {}

  scrollTo(FacultyFirst) {
    this.router.navigate(['/faculty'], { queryParams: { faculty: FacultyFirst }, relativeTo: this.route });
  }
}
