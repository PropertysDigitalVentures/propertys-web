import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RentComponent } from './rent.component';
import {AppHeaderModule} from '../shared/components/app-header/app-header.module';
import {AppFooterModule} from '../shared/components/app-footer/app-footer.module';

@NgModule({
  declarations: [
    RentComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppHeaderModule,
    AppFooterModule,
    RouterModule.forChild([{
      path: '',
      component: RentComponent
  }])
  ],
  providers: [],
  exports: [
    RentComponent
  ],
  bootstrap: [RentComponent]
})
export class RentModule { }
