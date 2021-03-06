import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

enum MainPage {
  home = 1,
  about_me = 2,
  contact = 3,
}

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  pageActive!: MainPage;

  constructor(private router: Router) {
    this.router.events.subscribe((obs) => {
      if (obs instanceof NavigationEnd) {
        if (obs.url.indexOf('hakkimizda') > 0) {
          this.pageActive = MainPage.about_me;
        } else if (obs.url.indexOf('iletisim') > 0) {
          this.pageActive = MainPage.contact;
        } else if (obs.url.indexOf('Anasayfa') > 0) {
          this.pageActive = MainPage.home;
        } else {
          this.pageActive = MainPage.home;
        }
      }
    });
  }

  ngOnInit(): void {}
}
