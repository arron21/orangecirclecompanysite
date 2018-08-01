import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {
  title: string = 'Photography'
  description: string = 'A high quality business should have high quality photos'
  constructor() { }

  ngOnInit() {
  }

}
