import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogin: boolean;
  constructor(private route: Router) {}

  ngOnInit() {
    this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((currentPath: any) => {
        if (currentPath.url === "/home" || currentPath.url === "/") {
          this.isLogin = true;
        }else{
          this.isLogin = false
        }
      });
  }
}
