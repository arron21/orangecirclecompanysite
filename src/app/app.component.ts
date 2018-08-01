import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    public router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // ga('set', 'page', event.urlAfterRedirects);
        // ga('send', 'pageview');
      }
    });
  }
}
