import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public navActive: Boolean = false;

  public links: any = [
      {
        label: 'Home',
        url: ''
      },
      {
        label: 'Works',
        url: 'works'
      },
      {
        label: 'Pricing',
        url: 'pricing'
      },
      {
        label: 'About Us',
        url: 'about'
      },
      {
        label: 'Contact Us',
        url: 'contact'
      },

  ];
  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    if (this.navActive) {
      this.navActive = false;
    } else {
      this.navActive = true;
    }
    console.log(this.navActive);
  }

}
