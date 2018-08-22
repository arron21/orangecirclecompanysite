import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksHomeComponent } from './works-home/works-home.component';
import { RouterModule, Routes } from "@angular/router";
import { WorkAslaLandComponent } from './work-asla-land/work-asla-land.component';
import { WorkSpecialOlympicsComponent } from './work-special-olympics/work-special-olympics.component';
import { WorkFwcseComponent } from './work-fwcse/work-fwcse.component';
import { WorkMwPartnersComponent } from './work-mw-partners/work-mw-partners.component';
import { WorkAbbottTechnologiesComponent } from './work-abbott-technologies/work-abbott-technologies.component';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { WorkCastOfCrownsComponent } from './work-cast-of-crowns/work-cast-of-crowns.component';
import { ImageZoomModule } from 'angular2-image-zoom';

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
                path: 'cast-of-crowns',
                component: WorkCastOfCrownsComponent,
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
        NgxChartsModule,
        ImageZoomModule
    ],
    declarations: [
        WorksHomeComponent,
        WorkAslaLandComponent,
        WorkSpecialOlympicsComponent,
        WorkFwcseComponent,
        WorkMwPartnersComponent,
        WorkAbbottTechnologiesComponent,
        WorkCastOfCrownsComponent
    ]
})
export class WorksModule { }
