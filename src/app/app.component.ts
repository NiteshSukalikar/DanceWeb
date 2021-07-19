import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'snm-web-app';
  loading = true;
  isDashboardPage: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.events.subscribe((e: RouterEvent) => {
    //   this.navigationInterceptor(e);
    // });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event:any) => {
        if (event.url == '/' || event.url == '/login') {
          this.isDashboardPage = false;
        }else{
          this.isDashboardPage = true;
        }
      });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      console.log('page loading');
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
  //Scroll To top
  onActivate(event) {
    // let scrollToTop = window.setInterval(() => {
    //     let pos = window.pageYOffset;
    //     if (pos > 0) {
    //         window.scrollTo(0, pos - 20); // how far to scroll on each step
    //     } else {
    //         window.clearInterval(scrollToTop);
    //     }
    // }, 16);
  }
}
