import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss']
})
export class WebsitesComponent implements OnInit {
  title: string = 'Websites'
  description: string = 'Affordable high quality web design and development'
  constructor() { }

  ngOnInit() {
  }

}
