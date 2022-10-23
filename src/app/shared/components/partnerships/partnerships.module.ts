import { NgModule } from '@angular/core';
import { PartnershipsComponent } from './partnerships.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PartnershipsComponent],
    imports: [
        RouterModule,
        IvyCarouselModule
    ],
    exports: [PartnershipsComponent]
})
export class PartnershipsModule {}
