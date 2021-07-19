import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from 'src/app/utility/constant';
import { VisitorsService } from './visitors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bioDesc = Constant;
  SlideOptions = { items: 3, dots: true, nav: false };
  ipaddress: any;
  constructor(private router: Router, private route: ActivatedRoute,
    private http: HttpClient, private visitorsService:VisitorsService) {}

  ngOnInit() {
    this.getAjx();
    this.getIp();
  }

  scrollTo(FacultyFirst) {
    this.router.navigate(['/faculty'], {
      queryParams: { faculty: FacultyFirst },
      relativeTo: this.route,
    });
  }

  getAjx() {
    this.http.get('http://ip-api.com/json').subscribe(res =>{
      console.log("old way" ,res);      
    })
  }

  getIp() {
    this.visitorsService.getIpAddress().subscribe(res => {
      this.ipaddress = res['ip'];
      this.visitorsService.getGEOLocation(this.ipaddress).subscribe(res => {      
        console.log("using different way" , res);
      });
    });    
  }
}
