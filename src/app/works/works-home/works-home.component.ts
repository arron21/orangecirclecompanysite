import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-home',
  templateUrl: './works-home.component.html',
  styleUrls: ['./works-home.component.css']
})
export class WorksHomeComponent implements OnInit {

    worksArray: Array<any> = [
        {
            name: 'Asla Land',
            link: 'asla'
        },
        {
            name: 'Special Olympics',
            link: 'special-olympics'
        },
        {
            name: 'Cast of Crowns',
            link: 'cast-of-crowns'
        },
        {
            name: 'FWCSE',
            link: 'fwcse'
        },
        // {
        //     name: 'MW Partners',
        //     link: 'mw-partners'
        // },
        // {
        //     name: 'Abbott Technologies',
        //     link: 'abbott-technologies'
        // },



    ]

    constructor() { }

  ngOnInit() {
  }

}
