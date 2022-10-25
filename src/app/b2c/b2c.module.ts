import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { B2CComponent } from './b2c.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HowCanIHelpModule } from '../shared/components/how-can-i-help/how-can-i-help.module';
import { PartnershipsModule } from '../shared/components/partnerships/partnerships.module';

@NgModule({
  declarations: [
    B2CComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    IvyCarouselModule,
    HowCanIHelpModule,
    PartnershipsModule,
    RouterModule.forChild([{
      path: '',
      component: B2CComponent
  }])
  ],
  providers: [
  ],
  exports: [
    B2CComponent
  ],
  bootstrap: [B2CComponent]
})
export class B2CModule { }
