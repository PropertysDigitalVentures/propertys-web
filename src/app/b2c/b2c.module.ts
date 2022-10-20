import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { B2CComponent } from './b2c.component';
import { AppHeaderModule } from '../shared/components/app-header/app-header.module';
import { AppFooterModule } from '../shared/components/app-footer/app-footer.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    B2CComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppHeaderModule,
    AppFooterModule,
    IvyCarouselModule,
    // FormsModule,
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
