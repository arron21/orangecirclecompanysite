import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  public pricingType: any;
  constructor() { }

  ngOnInit() {
  }

  setPricing(type) {
    this.pricingType = type;
  }

}
