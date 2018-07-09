import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-fwcse',
  templateUrl: './work-fwcse.component.html',
  styleUrls: ['./work-fwcse.component.css']
})
export class WorkFwcseComponent implements OnInit {

    single: any[];
    multi: any[];

    view: any[] = [700, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'Population';

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    data: any;

  constructor() {

  }

  ngOnInit() {
      this.single = [];
      this.multi =[];

      this.view = [700, 400];

      // options
      this.showXAxis = true;
      this.showYAxis = true;
      this.gradient = false;
      this.showLegend = false;
      this.showXAxisLabel = false;
      this.xAxisLabel = 'test';
      this.showYAxisLabel = false;
      this.yAxisLabel = 'Population';
      this.gradient = true;

      this.colorScheme = {
          domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
      };

      this.data =[
          {
            "name": "HTML",
            "value": 60
          },
          {
              "name": "CSS",
              "value": 90
          },
          {
              "name": "WordPress",
              "value": 80
          }]

  }

  onSelect(event) {
      console.log(event);
  }

}
