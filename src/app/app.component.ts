// @ts-nocheck
import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'; // import Router and NavigationEnd

declare let twq;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  constructor(public router: Router) {

    this.router.events.subscribe(event => {

      // Twitter page tracking
      if (event instanceof NavigationEnd) {
        twq('track','PageView');
      }
    });
  }
}
