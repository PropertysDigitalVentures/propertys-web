import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TermsComponent } from './terms.component';
import {AppHeaderModule} from '../../shared/components/app-header/app-header.module';
import {AppFooterModule} from '../../shared/components/app-footer/app-footer.module';

@NgModule({
  declarations: [
    TermsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppHeaderModule,
    AppFooterModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: TermsComponent
  }])
  ],
  providers: [
  ],
  exports: [
    TermsComponent
  ],
  bootstrap: [TermsComponent]
})
export class TermsModule { }
