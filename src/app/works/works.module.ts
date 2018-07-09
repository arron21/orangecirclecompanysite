import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksHomeComponent } from './works-home/works-home.component';
import {RouterModule, Routes} from "@angular/router";
import { WorkAslaLandComponent } from './work-asla-land/work-asla-land.component';
import { WorkSpecialOlympicsComponent } from './work-special-olympics/work-special-olympics.component';
import { WorkFwcseComponent } from './work-fwcse/work-fwcse.component';
import { WorkMwPartnersComponent } from './work-mw-partners/work-mw-partners.component';
import { WorkAbbottTechnologiesComponent } from './work-abbott-technologies/work-abbott-technologies.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";

const projectRoutes: Routes = [
    {
        path: '',
        component: WorksHomeComponent,
        children: [
            {
                path: 'asla',
                component: WorkAslaLandComponent,
                children: []
            },
            {
                path: 'special-olympics',
                component: WorkSpecialOlympicsComponent,
                children: []
            },
            {
                path: 'fwcse',
                component: WorkFwcseComponent,
                children: []
            },
            {
                path: 'abbott-technologies',
                component: WorkAbbottTechnologiesComponent,
                children: []
            },
            {
                path: 'mw-partners',
                component: WorkMwPartnersComponent,
                children: []
            },



        ]
    },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(projectRoutes),
      NgxChartsModule
  ],
  declarations: [WorksHomeComponent, WorkAslaLandComponent, WorkSpecialOlympicsComponent, WorkFwcseComponent, WorkMwPartnersComponent, WorkAbbottTechnologiesComponent]
})
export class WorksModule { }
