import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adwords',
  templateUrl: './adwords.component.html',
  styleUrls: ['./adwords.component.scss']
})
export class AdwordsComponent implements OnInit {
  title: string = 'AdWords'
  description: string = 'Getting noticed on Google was never so easy'
  constructor() { }

  ngOnInit() {
  }

}
