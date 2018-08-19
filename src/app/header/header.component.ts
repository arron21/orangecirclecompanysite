import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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

  public servicesLinks: any = [
      {
          label: 'Coding',
          url: '/coding'
      },
      {
          label: 'Websites',
          url: '/websites'
      },
      {
          label: 'Consulting',
          url: '/consulting'
      },
      {
          label: 'SEO',
          url: '/seo'
      },
      {
          label: 'AdWords',
          url: '/adwords'
      },
      {
          label: 'Photography',
          url: '/photography'
      },
      // {
      //     label: 'Artwork',
      //     url: '/artwork'
      // },
      {
          label: 'Copywriting',
          url: '/copywriting'
      },
  ]

  @ViewChild('navMenu') navMenu: ElementRef;
  @ViewChild('navBurger') navBurger: ElementRef;
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

  linkClicked(link) {
    console.log(this.navMenu);
    console.log(this.navMenu.nativeElement);
    const el: HTMLElement = this.navBurger.nativeElement as HTMLElement;
    el.click();
    // this.navMenu.nativeElement.classList.remove('is-active');
    // this.navBurger.nativeElement.classList.remove('is-active');
  }

}
