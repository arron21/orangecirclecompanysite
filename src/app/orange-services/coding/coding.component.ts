import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss']
})
export class CodingComponent implements OnInit {
  title: string = 'Coding'
  description: string = 'The future is coding, whether its a website or an application, code controls everything'
  constructor() { }

  ngOnInit() {
  }

}
