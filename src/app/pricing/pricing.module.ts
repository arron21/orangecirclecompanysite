import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingCodeComponent } from './pricing-code/pricing-code.component';
import { PricingCopywritingComponent } from './pricing-copywriting/pricing-copywriting.component';
import {RouterModule, Routes} from "@angular/router";
import {PricingComponent} from "./pricing.component";
import { PricingConsultingComponent } from './pricing-consulting/pricing-consulting.component';
import { PricingWebsitesComponent } from './pricing-websites/pricing-websites.component';

const pricingRoutes: Routes = [
    {
        path: '',
        component: PricingComponent,
        children: [
            {
                path: 'coding',
                component: PricingCodeComponent,
                children: []
            },
            {
                path: 'copy-writing',
                component: PricingCopywritingComponent,
                children: []
            },
            {
                path: 'websites',
                component: PricingWebsitesComponent,
                children: []
            },
            {
                path: 'consulting',
                component: PricingConsultingComponent,
                children: []
            }
        ]
    },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pricingRoutes)
  ],
  declarations: [PricingComponent, PricingCodeComponent, PricingCopywritingComponent, PricingConsultingComponent, PricingWebsitesComponent]
})
export class PricingModule { }
