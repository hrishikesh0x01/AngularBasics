import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularBasics';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      // console.log(event);
      if (event instanceof NavigationStart) {
        if (localStorage.getItem('token')) {
          if (event.url == '/login') {
            this.router.navigateByUrl('/logout');
          } else if (event.url == '/logout') {
            localStorage.removeItem('token');
            this.router.navigateByUrl('/login');
            // console.log("OOff");
          }
        } else if (event.url != '/login' && event.url != '/register') {
          this.router.navigateByUrl('/login');
        }
      }
    });
  }
}
