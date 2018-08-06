import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {
  title: string = 'Artwork'
  description: string = 'Logos and Web Design'
  constructor() { }

  ngOnInit() {
  }

}
