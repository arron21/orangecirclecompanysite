import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss']
})
export class SeoComponent implements OnInit {

  title: string = 'SEO'
  description: string = 'Its how websites are found, you gotta speak their language, and the language is SEO'
  constructor() { }

  ngOnInit() {
  }

}
